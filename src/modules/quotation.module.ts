import { Module } from '@nestjs/common';
import { CreateQuotation } from 'src/application/use-cases/create-quotation.use-case';
import { QuotationController } from 'src/infrastructure/controllers/quotation.controller';
import { CarModule } from './car.module';

@Module({
  imports: [CarModule],
  controllers: [QuotationController],
  providers: [CreateQuotation],
})
export class QuotationModule {}
