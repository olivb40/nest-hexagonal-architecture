import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { IRental } from 'src/domain/entities/rental.entity.interface';
import { RentalService } from '../../application/services/rental.service';

@Controller('rentals')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Get()
  async getRental(@Param('id') id: number): Promise<IRental> {
    return this.rentalService.getRental(id);
  }

  @Post()
  async createRental(@Body('rental') rental: IRental): Promise<IRental> {
    return this.rentalService.createRental(rental);
  }
}
