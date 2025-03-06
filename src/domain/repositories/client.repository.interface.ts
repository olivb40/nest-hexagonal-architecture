import { IClient } from '../entities/client.entity.interface';

export interface IClientRepository {
  findById(id: number): Promise<IClient | null>;
  save(client: IClient): Promise<IClient>;
}
