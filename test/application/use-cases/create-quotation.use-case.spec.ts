import { Test, TestingModule } from '@nestjs/testing';
import { CreateQuotation } from 'src/application/use-cases/create-quotation.use-case';
import { Car } from 'src/domain/entities/car.entity';
import { CarCategory } from 'src/domain/enums/car-category.enum';
import { CarsNotFoundException } from 'src/domain/exceptions/cars-not-found.exception';
import { DateUtils } from 'src/utils/date.utils';
import { DateInvalidException } from 'src/utils/exceptions/date-invalid.exception';
import { CarRepositoryMock } from 'test/infrastructure/repositories/car.repository.mock';

describe('CreateQuotation', () => {
  let moduleTest: TestingModule;
  let createQuotation: CreateQuotation;

  beforeAll(async () => {
    moduleTest = await Test.createTestingModule({
      providers: [
        CreateQuotation,
        {
          provide: 'CarRepository',
          useValue: CarRepositoryMock,
        },
      ],
    }).compile();

    createQuotation = moduleTest.get<CreateQuotation>(CreateQuotation);
  });

  it('should return an error if no cars are found', async () => {
    await expect(
      createQuotation.execute(new Date(), new Date()),
    ).rejects.toThrow(CarsNotFoundException);
  });

  it('should return an error if the start date is invalid', async () => {
    const cars: Car[] = [
      {
        id: 1,
        modelName: 'Peugeot',
        category: CarCategory.ECONOMY,
        dailyPrice: 50,
      },
    ];

    CarRepositoryMock.find = jest.fn(() => Promise.resolve(cars));

    await expect(
      createQuotation.execute(new Date('invalid-date'), new Date()),
    ).rejects.toThrow(DateInvalidException);
  });

  it('should return prices for each car', async () => {
    const cars: Car[] = [
      {
        id: 1,
        modelName: 'Peugeot',
        category: CarCategory.ECONOMY,
        dailyPrice: 50,
      },
      {
        id: 2,
        modelName: 'Mercedes',
        category: CarCategory.COMFORT,
        dailyPrice: 150,
      },
    ];

    CarRepositoryMock.find = jest.fn(() => Promise.resolve(cars));

    const dateStart = new Date();
    const dateEnd = DateUtils.addDays(dateStart, 5);

    const results = await createQuotation.execute(dateStart, dateEnd);

    expect(results).toHaveLength(cars.length);
    expect(results).toEqual(
      expect.arrayContaining([
        {
          car: {
            id: 2,
            modelName: 'Mercedes',
            category: CarCategory.COMFORT,
            dailyPrice: 150,
          },
          price: {
            amount: 750,
            currency: 'EUR',
          },
        },
      ]),
    );
  });
});
