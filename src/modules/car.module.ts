import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarService } from 'src/application/services/car.service';
import { CarController } from 'src/infrastructure/controllers/car.controller';
import { CarEntity } from 'src/infrastructure/entities/car.entity.orm';
import { CarRepositoryImpl } from 'src/infrastructure/repositories/car.repository.impl';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity])],
  providers: [
    {
      provide: 'CarRepository',
      useClass: CarRepositoryImpl,
    },
    CarService,
  ],
  controllers: [CarController],
  exports: ['CarRepository'],
})
export class CarModule {}
