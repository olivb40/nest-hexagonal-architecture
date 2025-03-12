import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RentalEntity } from 'src/infrastructure/entities/rental.entity.orm';

@Module({
  imports: [TypeOrmModule.forFeature([RentalEntity])],
})
export class RentalModule {}
