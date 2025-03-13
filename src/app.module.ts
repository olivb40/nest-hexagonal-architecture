import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from './infrastructure/entities/car.entity.orm';
import { CustomerEntity } from './infrastructure/entities/customer.entity.orm';
import { RentalEntity } from './infrastructure/entities/rental.entity.orm';
import { CarModule } from './modules/car.module';
import { CustomerModule } from './modules/customer.module';
import { QuotationModule } from './modules/quotation.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'your_username',
      password: process.env.DB_PASSWORD || 'your_password',
      database: process.env.DB_DATABASE || 'your_database',
      entities: [CarEntity, CustomerEntity, RentalEntity],
      synchronize: true, // attention à la production, à utiliser avec précaution
      logging: false,
    }),
    QuotationModule,
    CarModule,
    CustomerModule,
  ],
})
export class AppModule {}
