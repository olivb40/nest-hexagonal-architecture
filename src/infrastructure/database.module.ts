import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarOrmEntity } from './orm/car.orm-entity';
import { ClientOrmEntity } from './orm/client.orm-entity';
import { RentalOrmEntity } from './orm/rental.orm-entity';
import { CarRepository } from './repositories/car.repository';
import { ClientRepository } from './repositories/client.repository';
import { RentalRepository } from './repositories/rental.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClientOrmEntity, CarOrmEntity, RentalOrmEntity]),
  ],
  providers: [
    { provide: 'IClientRepository', useClass: ClientRepository },
    { provide: 'ICarRepository', useClass: CarRepository },
    { provide: 'IRentalRepository', useClass: RentalRepository },
  ],
  exports: ['IClientRepository', 'ICarRepository', 'IRentalRepository'],
})
export class DatabaseModule {}
