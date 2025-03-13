import { Car } from '../entities/car.entity';
import { Money } from './money.vo';

export class QuotationResult {
  constructor(
    public car: Car,
    public price: Money,
  ) {}
}
