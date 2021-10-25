import { Injectable } from '@angular/core';
import { WeatherAlert } from '../models/weather/weather-alert.models';

@Injectable({
  providedIn: 'root',
})
export class EpochConverterService {
  convertToDate(seconds: number): Date {
    return new Date(seconds * 1000);
  }

  convertToTime(time: number): string {
    return this.convertToDate(time).toLocaleTimeString();
  }

  convertToDateTime(time: number): string {
    const date = this.convertToDate(time);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  /**
   * Returns string with alert's start and end as a time range
   * @param alert WeatherAlert
   * @returns string
   */
  alertTimeRange(alert: WeatherAlert): string {
    return `${this.convertToDateTime(alert.start)} — ${this.convertToDateTime(
      alert.end
    )}`;
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
  offsetDays(point: number, compare: number, offset: number = 0): number {
    const dailySeconds = 8.64e4;
    const zPoint = Math.floor((point + offset) / dailySeconds);
    const zCompare = Math.floor((compare + offset) / dailySeconds);

    return zPoint - zCompare;
  }
}
