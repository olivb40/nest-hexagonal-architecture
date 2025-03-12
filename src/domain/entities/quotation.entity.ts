import { Car } from './car.entity';
import { Customer } from './customer.entity';

export class QuotationResult {
  constructor(
    public car: Car,
    public price: number,
  ) {}
}

export class Quotation {
  constructor(
    public readonly startDate: Date,
    public readonly endDate: Date,
    public readonly customer: Customer,
    private results: QuotationResult[],
  ) {}

  addResult(result: QuotationResult) {
    this.results.push(result);
  }

  getResults() {
    return this.results;
  }
}
