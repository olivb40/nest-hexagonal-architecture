import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from 'src/domain/entities/customer.entity';
import { CustomerNotFoundException } from 'src/domain/exceptions/customer-not-found.exception';
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
    const ormCustomer = this.repository.create(car);
    return this.repository.save(ormCustomer);
  }

  async find(): Promise<Customer[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Customer> {
    const customer = await this.repository.findOne({ where: { id } });

    if (!customer) {
      throw new CustomerNotFoundException(id);
    }

    return customer;
  }

  async update(id: number, car: Partial<Customer>): Promise<Customer> {
    await this.repository.update(id, car);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete({ id });
  }
}
