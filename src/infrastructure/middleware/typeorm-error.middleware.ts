import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class TypeOrmExceptionFilter implements ExceptionFilter {
  catch(exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Database error';

    // Checks if the error is a unique constraint violation
    if (
      exception.message.includes(
        'duplicate key value violates unique constraint',
      )
    ) {
      status = HttpStatus.CONFLICT;
      message = 'Duplicate entry: This value already exists';
    }

    // Checks if the error is related to a NOT NULL constraint
    else if (exception.message.includes('null value in column')) {
      status = HttpStatus.BAD_REQUEST;
      message = `Missing required field: ${this.extractColumnName(exception.message)}`;
    }

    // Checks if the error is due to a foreign key constraint violation
    else if (exception.message.includes('violates foreign key constraint')) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Foreign key constraint violation';

      // Checks if the error is due to a CHECK constraint violation
    } else if (exception.message.includes('violates check constraint')) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Check constraint violation';
    }

    // Respond with more details
    response.status(status).json({
      statusCode: status,
      error: 'Database Error',
      message,
      detail: exception.message, // Adds raw message for debugging
    });
  }

  private extractColumnName(message: string): string {
    const match = message.match(/column "(.*?)"/);
    return match ? match[1] : 'unknown';
  }
}
