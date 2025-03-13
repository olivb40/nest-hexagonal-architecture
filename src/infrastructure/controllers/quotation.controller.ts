import { Controller, Get, Inject, Query } from '@nestjs/common';
import { CreateQuotation } from 'src/application/use-cases/create-quotation.use-case';
import { QuotationResult } from 'src/domain/value-objects/quotation.vo';

@Controller('quotation')
export class QuotationController {
  constructor(
    @Inject(CreateQuotation) private readonly createQuotation: CreateQuotation,
  ) {}

  @Get()
  async getQuotation(
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ): Promise<QuotationResult[]> {
    return this.createQuotation.execute(new Date(startDate), new Date(endDate));
  }
}
