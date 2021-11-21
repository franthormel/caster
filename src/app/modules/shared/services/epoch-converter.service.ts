import { Injectable } from '@angular/core';
import { WeatherAlert } from '../../../models/weather/weather-alert.models';

@Injectable({
  providedIn: 'root',
})
export class EpochConverterService {
  toDate(seconds: number): Date {
    return new Date(seconds * 1000);
  }

  toDateTime(time: number): string {
    const date = this.toDate(time);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  toTime(time: number): string {
    return this.toDate(time).toLocaleTimeString();
  }

  toTimerange(alert: WeatherAlert): string {
    return `${this.toDateTime(alert.start)} — ${this.toDateTime(alert.end)}`;
  }

  displayDateTime(point: number, compare: number, offset: number = 0): string {
    const days = this.offsetDays(point, compare, offset);
    const value = this.prependOffsetToCompare(days, compare);

    return value;
  }

  /**
   * * Returns 2 if `point` is 2 days ahead of `compare` (2 days ago)
   * * Returns 1 if `point` is 1 day ahead of `compare` (Yesterday)
   * * Returns 0 if both `point` and `compare` are on the same day (Today)
   * * Returns -1 if `point` is 1 day behind of `compare` (Tomorrow)
   * * Returns -2 if `point` is 2 days behind of `compare` (2 days from now/today)
   * @param point UTC seconds
   * @param compare UTC seconds
   * @param offset Timezone's offset in seconds (defaults to 0)
   * @returns number
   */
  private offsetDays(
    point: number,
    compare: number,
    offset: number = 0
  ): number {
    const dailySeconds = 8.64e4;
    const zPoint = Math.floor((point + offset) / dailySeconds);
    const zCompare = Math.floor((compare + offset) / dailySeconds);

    return zPoint - zCompare;
  }

  /**
   * Prepends either 'Today', 'Tomorrow' or neither depending on `point` and `compare`
   * @param offsetDays Calculated value from `offsetDays()`
   * @param compare UTC date to display
   * @returns string
   */
  private prependOffsetToCompare(offsetDays: number, compare: number): string {
    let value = this.toDateTime(compare);

    if (offsetDays === 0) {
      value = `Today ${this.toTime(compare)}`;
    } else if (offsetDays === -1) {
      value = `Tomorrow ${this.toTime(compare)}`;
    }

    return value;
  }
}
