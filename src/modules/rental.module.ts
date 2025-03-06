import { Module } from '@nestjs/common';
import { DatabaseModule } from '../infrastructure/database.module';
import { RentalController } from '../adapters/controllers/rental.controller';
import { RentalService } from '../application/services/rental.service';
import { RentalCalculationService } from '../domain/services/rental-calculation.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RentalController],
  providers: [RentalService, RentalCalculationService],
  exports: [RentalService],
})
export class RentalModule {}
