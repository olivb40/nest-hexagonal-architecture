import { QuotationResult } from 'src/domain/entities/quotation.entity';
import { CarRepository } from 'src/domain/repositories/car.repository';
import { DateUtils } from 'src/utils/date.utils';

export class CreateQuotation {
  constructor(private readonly carRepository: CarRepository) {}

  async execute(dateStart: Date, dateEnd: Date): Promise<QuotationResult[]> {
    const cars = await this.carRepository.find();

    if (!cars.length) throw new Error('No cars found');

    const days = DateUtils.getDaysBetween(dateStart, dateEnd);

    return cars.map((car) => {
      return new QuotationResult(car, car.dailyPrice * days);
    });
  }
}
