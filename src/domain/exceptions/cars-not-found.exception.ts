export class CarsNotFoundException extends Error {
  constructor() {
    super('Cars not found');
  }
}
