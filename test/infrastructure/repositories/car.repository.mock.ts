import { Car } from 'src/domain/entities/car.entity';
import { CarRepository } from 'src/domain/repositories/car.repository';

export const CarRepositoryMock: CarRepository = {
  create: jest.fn((car: Partial<Car>) => Promise.resolve(car as Car)),
  find: jest.fn(() => Promise.resolve([])),
  findOne: jest.fn((id: number) => Promise.resolve({ id } as Car)),
  update: jest.fn((id: number, car: Partial<Car>) =>
    Promise.resolve({ ...car, id } as Car),
  ),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete: jest.fn((id: number) => Promise.resolve()),
};
