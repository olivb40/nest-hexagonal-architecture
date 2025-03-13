export class CustomerNotFoundException extends Error {
  constructor(id: number) {
    super('Customer with id ' + id + ' not found');
  }
}
