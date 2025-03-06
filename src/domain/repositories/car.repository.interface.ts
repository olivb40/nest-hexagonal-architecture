import { ICar } from '../entities/car.entity.interface';

export interface ICarRepository {
  findById(id: number): Promise<ICar | null>;
  save(Car: ICar): Promise<ICar>;
}
