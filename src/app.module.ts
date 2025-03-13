import { Module } from '@nestjs/common';
import { CarModule } from './modules/car.module';
import { CustomerModule } from './modules/customer.module';
import { QuotationModule } from './modules/quotation.module';
import { TypeOrmModule } from './modules/typeorm.module';

@Module({
  imports: [TypeOrmModule, QuotationModule, CarModule, CustomerModule],
})
export class AppModule {}
