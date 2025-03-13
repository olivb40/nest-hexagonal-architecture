import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/infrastructure/entities/customer.entity.orm';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity])],
})
export class CustomerModule {}
