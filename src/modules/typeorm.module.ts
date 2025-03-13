import { Module } from '@nestjs/common';
import { TypeOrmModule as BaseTypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from 'src/infrastructure/entities/car.entity.orm';
import { CustomerEntity } from 'src/infrastructure/entities/customer.entity.orm';
import { RentalEntity } from 'src/infrastructure/entities/rental.entity.orm';

@Module({
  imports: [
    BaseTypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      username: process.env.DB_USERNAME || 'your_username',
      password: process.env.DB_PASSWORD || 'your_password',
      database: process.env.DB_DATABASE || 'your_database',
      entities: [CarEntity, CustomerEntity, RentalEntity],
      synchronize: true, // DO NOT USE IN PRODUCTION
      logging: false,
    }),
  ],
})
export class TypeOrmModule {}
