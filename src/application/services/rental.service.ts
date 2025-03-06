import { Inject, Injectable } from '@nestjs/common';
import { IRental } from 'src/domain/entities/rental.entity.interface';
import { IRentalRepository } from '../../domain/repositories/rental.repository.interface';
import { RentalCalculationService } from '../../domain/services/rental-calculation.service';

@Injectable()
export class RentalService {
  constructor(
    @Inject('IRentalRepository')
    private readonly rentalRepo: IRentalRepository,
    private readonly calculationService: RentalCalculationService,
  ) {}

  async createRental(rental: IRental): Promise<IRental> {
    const savedRental = await this.rentalRepo.save(rental);

    const total = this.calculationService.calculateTotal(savedRental);
    console.log(`Total cost is : ${total}`);

    return savedRental;
  }

  async getRental(id: number): Promise<IRental> {
    return this.rentalRepo.findById(id);
  }
}
