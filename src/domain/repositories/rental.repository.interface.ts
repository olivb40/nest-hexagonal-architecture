import { IRental } from '../entities/rental.entity.interface';

export interface IRentalRepository {
  findById(id: number): Promise<IRental | null>;
  save(IRental: IRental): Promise<IRental>;
}
