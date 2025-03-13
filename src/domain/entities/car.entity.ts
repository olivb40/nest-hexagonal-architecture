import { CarCategory } from '../enums/car-category.enum';

export class Car {
  constructor(
    public readonly id: number,
    public readonly modelName: string,
    public readonly dailyPrice: number,
    public readonly category: CarCategory,
  ) {}
}
