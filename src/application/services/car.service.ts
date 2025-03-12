import { Car } from 'src/domain/entities/car.entity';
import { CarRepository } from 'src/domain/repositories/car.repository';

export class CarService {
  constructor(private readonly carRepository: CarRepository) {}

  async create(car: Partial<Car>): Promise<Car> {
    return this.carRepository.create(car);
  }

  async find(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async findOne(id: number): Promise<Car | null> {
    return this.carRepository.findOne(id);
  }

  async update(car: Partial<Car>): Promise<Car> {
    return this.carRepository.update(car);
  }

  async delete(id: number): Promise<void> {
    return this.carRepository.delete(id);
  }
}
