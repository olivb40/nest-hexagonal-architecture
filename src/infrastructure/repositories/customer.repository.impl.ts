import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/domain/entities/customer.entity';
import { CustomerRepository } from 'src/domain/repositories/customer.repository';
import { Repository } from 'typeorm';
import { CustomerEntity } from '../entities/customer.entity.orm';

@Injectable()
export class CustomerRepositoryImpl implements CustomerRepository {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly repository: Repository<CustomerEntity>,
  ) {}

  async create(car: Partial<Customer>): Promise<Customer> {
    const ormCar = this.repository.create(car);
    return this.repository.save(ormCar);
  }

  async find(): Promise<Customer[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Customer | null> {
    return this.repository.findOne({ where: { id } });
  }

  async update(car: Partial<Customer>): Promise<Customer> {
    const ormCar = this.repository.create(car);
    return this.repository.save(ormCar);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete({ id });
  }
}
