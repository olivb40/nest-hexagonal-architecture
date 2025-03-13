import { Inject } from '@nestjs/common';
import { Currency } from 'src/domain/enums/currency.enum';
import { CarRepository } from 'src/domain/repositories/car.repository';
import { Money } from 'src/domain/value-objects/money.vo';
import { QuotationResult } from 'src/domain/value-objects/quotation.vo';
import { DateUtils } from 'src/utils/date.utils';

export class CreateQuotation {
  constructor(
    @Inject('CarRepository') private readonly carRepository: CarRepository,
  ) {}

  async execute(dateStart: Date, dateEnd: Date): Promise<QuotationResult[]> {
    const cars = await this.carRepository.find();

    if (!cars.length) throw new Error('No cars found');

    const days = DateUtils.getDaysBetween(dateStart, dateEnd);

    return cars.map((car) => {
      return new QuotationResult(
        car,
        new Money(car.dailyPrice * days, Currency.EUR),
      );
    });
  }
}
