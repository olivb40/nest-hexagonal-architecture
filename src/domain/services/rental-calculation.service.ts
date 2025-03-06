import { ClientType } from '../entities/client.entity.interface';
import { IRental } from '../entities/rental.entity.interface';

export class RentalCalculationService {
  public calculateTotal(rental: IRental): number {
    const rate =
      rental.client.type === ClientType.Professional
        ? rental.car.dailyRate * 0.85
        : rental.car.dailyRate;
    return rate * rental.rentalDays;
  }
}
