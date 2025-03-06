import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrastructure/database.module';
import { RentalController } from './adapters/controllers/rental.controller';
import { RentalService } from './application/services/rental.service';
// Importez ici les entités ORM pour la configuration de TypeORM
import { ClientOrmEntity } from './infrastructure/orm/client.orm-entity';
import { CarOrmEntity } from './infrastructure/orm/car.orm-entity';
import { RentalOrmEntity } from './infrastructure/orm/rental.orm-entity';
import { RentalCalculationService } from './domain/services/rental-calculation.service';
import { RentalModule } from './modules/rental.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'your_username',
      password: process.env.DB_PASSWORD || 'your_password',
      database: process.env.DB_DATABASE || 'your_database',
      entities: [ClientOrmEntity, CarOrmEntity, RentalOrmEntity],
      synchronize: true, // Pour le développement uniquement
    }),
    DatabaseModule,
    RentalModule,
  ],
})
export class AppModule {}
