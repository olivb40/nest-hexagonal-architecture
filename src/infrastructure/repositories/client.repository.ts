import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IClient } from 'src/domain/entities/client.entity.interface';
import { Repository } from 'typeorm';
import { IClientRepository } from '../../domain/repositories/client.repository.interface';
import { ClientOrmEntity } from '../orm/client.orm-entity';

@Injectable()
export class ClientRepository implements IClientRepository {
  constructor(
    @InjectRepository(ClientOrmEntity)
    private readonly ormRepository: Repository<ClientOrmEntity>,
  ) {}

  async findById(id: number): Promise<IClient | null> {
    return this.ormRepository.findOne({ where: { id } }) || null;
  }

  async save(client: IClient): Promise<IClient> {
    return this.ormRepository.save(client);
  }
}
