import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IRentalRepository } from '../../domain/repositories/rental.repository.interface';
import { RentalOrmEntity } from '../orm/rental.orm-entity';
import { IRental } from 'src/domain/entities/rental.entity.interface';

@Injectable()
export class RentalRepository implements IRentalRepository {
  constructor(
    @InjectRepository(RentalOrmEntity)
    private readonly ormRepository: Repository<RentalOrmEntity>,
  ) {}

  async findById(id: number): Promise<IRental | null> {
    const ormRental = await this.ormRepository.findOne({
      where: { id },
      relations: ['client', 'car'],
    });

    if (!ormRental) return null;

    return ormRental;
  }

  async save(rental: IRental): Promise<IRental> {
    const saved = await this.ormRepository.save(rental);

    return this.findById(saved.id);
  }
}
