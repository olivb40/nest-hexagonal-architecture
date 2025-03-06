import { IClient } from 'src/domain/entities/client.entity.interface';
import { ClientOrmEntity } from '../orm/client.orm-entity';

// export const toDomainClient = (ormClient: ClientOrmEntity): Client => {
//   return new Client(ormClient.id, ormClient.name, ormClient.type);
// };

export const toOrmClient = (client: IClient): Partial<ClientOrmEntity> => {
  return {
    id: client.id,
    name: client.name,
    type: client.type,
  };
};
