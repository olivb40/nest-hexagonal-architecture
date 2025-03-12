import { Car, CarCategory } from 'src/domain/entities/car.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'cars' })
export class CarEntity implements Car {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'model_name' })
  modelName: string;

  @Column({
    type: 'simple-enum',
    enum: CarCategory,
    default: CarCategory.ECONOMY,
  })
  category: CarCategory;

  @Column({ name: 'daily_price', type: 'decimal' })
  dailyPrice: number;
}
