import { ICar } from './car.entity.interface';
import { IClient } from './client.entity.interface';

export interface IRental {
  id: number | null;
  client: IClient;
  car: ICar;
  rentalDays: number;
}
