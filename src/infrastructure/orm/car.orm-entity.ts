import { ICar } from 'src/domain/entities/car.entity.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cars' })
export class CarOrmEntity implements ICar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column('decimal')
  dailyRate: number;
}
