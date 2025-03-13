import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CarService } from 'src/application/services/car.service';
import { Car } from 'src/domain/entities/car.entity';

@Controller('cars')
export class CarController {
  constructor(@Inject(CarService) private readonly carService: CarService) {}

  @Post()
  async create(@Body() car: Partial<Car>): Promise<Car> {
    return this.carService.create(car);
  }

  @Get()
  async find(): Promise<Car[]> {
    return this.carService.find();
  }
}
