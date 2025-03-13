import { Car } from 'src/domain/entities/car.entity';
import { Customer } from 'src/domain/entities/customer.entity';
import { Rental } from 'src/domain/entities/rental.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CarEntity } from './car.entity.orm';
import { CustomerEntity } from './customer.entity.orm';

@Entity({ name: 'rentals' })
export class RentalEntity implements Rental {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'start_date', type: 'timestamptz' })
  startDate: Date;

  @Column({ name: 'end_date', type: 'timestamptz' })
  endDate: Date;

  @ManyToOne(() => CustomerEntity)
  customer: Customer;

  @ManyToOne(() => CarEntity)
  car: Car;
}
