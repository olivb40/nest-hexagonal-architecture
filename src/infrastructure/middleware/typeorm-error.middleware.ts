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

    // Vérifie si l'erreur est une violation de contrainte unique
    if (
      exception.message.includes(
        'duplicate key value violates unique constraint',
      )
    ) {
      status = HttpStatus.CONFLICT;
      message = 'Duplicate entry: This value already exists';
    }

    // Vérifie si l'erreur est liée à une contrainte NOT NULL
    else if (exception.message.includes('null value in column')) {
      status = HttpStatus.BAD_REQUEST;
      message = `Missing required field: ${this.extractColumnName(exception.message)}`;
    }

    // Autres erreurs SQL courantes
    else if (exception.message.includes('violates foreign key constraint')) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Foreign key constraint violation';
    } else if (exception.message.includes('violates check constraint')) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Check constraint violation';
    }

    // Réponse avec plus de détails
    response.status(status).json({
      statusCode: status,
      error: 'Database Error',
      message,
      detail: exception.message, // Ajoute le message brut pour le debugging
    });
  }

  private extractColumnName(message: string): string {
    const match = message.match(/column "(.*?)"/);
    return match ? match[1] : 'unknown';
  }
}
