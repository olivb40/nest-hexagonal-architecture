import { Inject } from '@nestjs/common';
import { Car } from 'src/domain/entities/car.entity';
import { CarNotFoundException } from 'src/domain/exceptions/car-not-found.exception';
import { CarRepository } from 'src/domain/repositories/car.repository';

export class CarService {
  constructor(
    @Inject('CarRepository') private readonly carRepository: CarRepository,
  ) {}

  async create(car: Partial<Car>): Promise<Car> {
    return this.carRepository.create(car);
  }

  async find(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.carRepository.findOne(id);

    if (!car) {
      throw new CarNotFoundException(id);
    }

    return car;
  }

  async update(id: number, car: Partial<Car>): Promise<Car> {
    await this.carRepository.update(id, car);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.carRepository.delete(id);
  }
}
