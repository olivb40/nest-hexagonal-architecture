import { Rental } from '../entities/rental.entity';

export interface RentalRepository {
  create(car: Partial<Rental>): Promise<Rental>;
  find(): Promise<Rental[]>;
  findOne(id: number): Promise<Rental | null>;
  update(car: Partial<Rental>): Promise<Rental>;
  delete(id: number): Promise<void>;
}
