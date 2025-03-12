export enum CarCategory {
  ECONOMY = 'economy',
  COMFORT = 'comfort',
  LUXURY = 'luxury',
}

export class Car {
  constructor(
    public readonly id: number,
    public readonly modelName: string,
    public readonly dailyPrice: number,
    public readonly category: CarCategory,
  ) {}
}
