import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ICar } from 'src/domain/entities/car.entity.interface';
import { Repository } from 'typeorm';
import { ICarRepository } from '../../domain/repositories/car.repository.interface';
import { CarOrmEntity } from '../orm/car.orm-entity';

@Injectable()
export class CarRepository implements ICarRepository {
  constructor(
    @InjectRepository(CarOrmEntity)
    private readonly ormRepository: Repository<CarOrmEntity>,
  ) {}

  async findById(id: number): Promise<ICar | null> {
    return this.ormRepository.findOne({ where: { id } }) || null;
  }

  async save(car: ICar): Promise<ICar> {
    const ormCar = this.ormRepository.create(car);
    return this.ormRepository.save(ormCar);
  }
}
