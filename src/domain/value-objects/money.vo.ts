import { Currency } from '../enums/currency.enum';

export class Money {
  constructor(
    public readonly amount: number,
    public readonly currency: Currency,
  ) {}
}
