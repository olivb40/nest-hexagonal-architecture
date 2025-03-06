export enum ClientType {
  Individual = 'INDIVIDUAL',
  Professional = 'PROFESSIONAL',
}

export interface IClient {
  id: number | null;
  name: string;
  type: ClientType;
}
