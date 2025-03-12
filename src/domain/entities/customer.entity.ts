export enum CustomerType {
  INDIVIDUAL = 'individual',
  PROFESSIONAL = 'professional',
}

export class Customer {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly customerType: CustomerType,
  ) {}
}
