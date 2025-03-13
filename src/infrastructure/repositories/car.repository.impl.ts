import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/domain/entities/car.entity';
import { CarNotFoundException } from 'src/domain/exceptions/car-not-found.exception';
import { CarRepository } from 'src/domain/repositories/car.repository';
import { Repository } from 'typeorm';
import { CarEntity } from '../entities/car.entity.orm';

@Injectable()
export class CarRepositoryImpl implements CarRepository {
  constructor(
    @InjectRepository(CarEntity)
    private readonly repository: Repository<CarEntity>,
  ) {}

  async create(car: Partial<Car>): Promise<Car> {
    const ormCar = this.repository.create(car);
    return this.repository.save(ormCar);
  }

  async find(): Promise<Car[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Car> {
    const car = await this.repository.findOneBy({ id });

    if (!car) {
      throw new CarNotFoundException(id);
    }

    return car;
  }

  async update(id: number, car: Partial<Car>): Promise<Car> {
    await this.repository.update(id, car);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
