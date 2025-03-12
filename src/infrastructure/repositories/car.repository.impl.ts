import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/domain/entities/car.entity';
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

  async findOne(id: number): Promise<Car | null> {
    return this.repository.findOneBy({ id });
  }

  async update(car: Partial<Car>): Promise<Car> {
    return this.repository.save(car);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
