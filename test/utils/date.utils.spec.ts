import { DateUtils } from 'src/utils/date.utils';
import { DateInvalidException } from 'src/utils/exceptions/date-invalid.exception';

describe('DateUtils', () => {
  it('should return the number of days between two dates', () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-01-05');
    const days = DateUtils.getDaysBetween(startDate, endDate);
    expect(days).toBe(4);
  });

  it('should add days to a date', () => {
    const date = new Date('2023-01-01');
    const daysToAdd = 5;
    const result = DateUtils.addDays(date, daysToAdd);
    expect(result.getDate()).toBe(6);
  });

  it('should throw an error if the date is invalid', () => {
    const invalidDate = new Date('invalid-date');
    expect(() => DateUtils.getDaysBetween(invalidDate, new Date())).toThrow(
      DateInvalidException,
    );
  });
});
