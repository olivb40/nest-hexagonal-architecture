import { CustomerType } from '../enums/customer-type.enum';

export class Customer {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly customerType: CustomerType,
  ) {}
}
