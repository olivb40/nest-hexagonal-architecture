import {
  ClientType,
  IClient,
} from 'src/domain/entities/client.entity.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'clients' })
export class ClientOrmEntity implements IClient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'simple-enum',
    enum: ClientType,
    default: ClientType.Individual,
  })
  type: ClientType;
}
