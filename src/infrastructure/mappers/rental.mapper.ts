import { IRental } from 'src/domain/entities/rental.entity.interface';
import { CarOrmEntity } from '../orm/car.orm-entity';
import { ClientOrmEntity } from '../orm/client.orm-entity';
import { RentalOrmEntity } from '../orm/rental.orm-entity';
import { toOrmCar } from './car.mapper';
import { toOrmClient } from './client.mapper';

// export const toDomainRental = (ormRental: RentalOrmEntity): IRental => {
//   const domainClient = toDomainClient(ormRental.client);
//   const domainCar = toDomainCar(ormRental.car);

//   return new IRental(
//     ormRental.id,
//     domainClient,
//     domainCar,
//     ormRental.rentalDays,
//   );
// };

export const toOrmRental = (rental: IRental): Partial<RentalOrmEntity> => {
  const ormClient = toOrmClient(rental.client);
  const ormCar = toOrmCar(rental.car);

  return {
    id: rental.id,
    client: ormClient as ClientOrmEntity,
    client_id: ormClient.id,
    car: ormCar as CarOrmEntity,
    car_id: ormCar.id,
    rentalDays: rental.rentalDays,
  };
};
