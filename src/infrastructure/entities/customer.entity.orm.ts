import { Customer, CustomerType } from 'src/domain/entities/customer.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'customers' })
export class CustomerEntity implements Customer {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    name: 'customer_type',
    type: 'simple-enum',
    enum: CustomerType,
    default: CustomerType.INDIVIDUAL,
  })
  customerType: CustomerType;
}
