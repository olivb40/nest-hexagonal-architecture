import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rental } from 'src/domain/entities/rental.entity';
import { RentalRepository } from 'src/domain/repositories/rental.repository';
import { Repository } from 'typeorm';
import { RentalEntity } from '../entities/rental.entity.orm';

@Injectable()
export class RentalRepositoryImpl implements RentalRepository {
  constructor(
    @InjectRepository(RentalEntity)
    private readonly repository: Repository<RentalEntity>,
  ) {}

  async create(car: Partial<Rental>): Promise<Rental> {
    const ormRental = this.repository.create(car);
    return this.repository.save(ormRental);
  }

  async find(): Promise<Rental[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Rental | null> {
    return this.repository.findOneBy({ id });
  }

  async update(car: Partial<Rental>): Promise<Rental> {
    return this.repository.save(car);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
