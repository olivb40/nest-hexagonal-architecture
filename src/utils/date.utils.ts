import { DateInvalidException } from './exceptions/date-invalid.exception';

export class DateUtils {
  static getDaysBetween(startDate: Date, endDate: Date): number {
    if (!this.isValidDate(startDate) || !this.isValidDate(endDate)) {
      throw new DateInvalidException();
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((endDate.getTime() - startDate.getTime()) / msPerDay);
  }

  static addDays(date: Date, days: number): Date {
    if (!this.isValidDate(date)) {
      throw new DateInvalidException();
    }

    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  static isValidDate(date: Date): boolean {
    return date instanceof Date && !isNaN(date.getTime());
  }
}
