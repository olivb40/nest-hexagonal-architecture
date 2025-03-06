import { ICar } from 'src/domain/entities/car.entity.interface';
import { CarOrmEntity } from '../orm/car.orm-entity';

// export const toDomainCar = (ormCar: CarOrmEntity): ICar => {
//   return new ICar(ormCar.id, ormCar.model, ormCar.dailyRate);
// };

export const toOrmCar = (car: ICar): Partial<CarOrmEntity> => {
  return {
    id: car.id,
    model: car.model,
    dailyRate: car.dailyRate,
  };
};
