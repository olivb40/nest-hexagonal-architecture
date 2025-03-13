import { InjectRepository } from '@nestjs/typeorm';
import { Rental } from 'src/domain/entities/rental.entity';
import { RentalNotFoundException } from 'src/domain/exceptions/rental-not-found.exception copy';
import { RentalRepository } from 'src/domain/repositories/rental.repository';
import { Repository } from 'typeorm';
import { RentalEntity } from '../entities/rental.entity.orm';

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

  async findOne(id: number): Promise<Rental> {
    const rental = await this.repository.findOne({ where: { id } });

    if (!rental) {
      throw new RentalNotFoundException(id);
    }

    return rental;
  }

  async update(id: number, car: Partial<Rental>): Promise<Rental> {
    await this.repository.update(id, car);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
