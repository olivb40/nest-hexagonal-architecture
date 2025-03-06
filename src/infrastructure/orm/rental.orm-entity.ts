import { IRental } from 'src/domain/entities/rental.entity.interface';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarOrmEntity } from './car.orm-entity';
import { ClientOrmEntity } from './client.orm-entity';

@Entity({ name: 'rentals' })
export class RentalOrmEntity implements IRental {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  client_id: number;

  @ManyToOne(() => ClientOrmEntity)
  @JoinColumn({ name: 'client_id' })
  client: ClientOrmEntity;

  @Column()
  car_id: number;

  @ManyToOne(() => CarOrmEntity)
  @JoinColumn({ name: 'car_id' })
  car: CarOrmEntity;

  @Column()
  rentalDays: number;
}
