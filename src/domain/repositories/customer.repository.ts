import { Customer } from '../entities/customer.entity';

export interface CustomerRepository {
  create(car: Partial<Customer>): Promise<Customer>;
  find(): Promise<Customer[]>;
  findOne(id: number): Promise<Customer>;
  update(id: number, car: Partial<Customer>): Promise<Customer>;
  delete(id: number): Promise<void>;
}
