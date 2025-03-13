import { Car } from './car.entity';
import { Customer } from './customer.entity';

export class Rental {
  constructor(
    public readonly id: number,
    public readonly customer: Customer,
    public readonly car: Car,
    public readonly startDate: Date,
    public readonly endDate: Date,
  ) {}
}
