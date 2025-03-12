export class DateUtils {
  static getDaysBetween(startDate: Date, endDate: Date): number {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((endDate.getTime() - startDate.getTime()) / msPerDay);
  }
}
