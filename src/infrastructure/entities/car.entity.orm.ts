import { Car } from 'src/domain/entities/car.entity';
import { CarCategory } from 'src/domain/enums/car-category.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'cars' })
export class CarEntity implements Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'model_name', unique: true })
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
