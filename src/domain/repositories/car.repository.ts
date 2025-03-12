import { Car } from '../entities/car.entity';

export interface CarRepository {
  create(car: Partial<Car>): Promise<Car>;
  find(): Promise<Car[]>;
  findOne(id: number): Promise<Car | null>;
  update(car: Partial<Car>): Promise<Car>;
  delete(id: number): Promise<void>;
}
