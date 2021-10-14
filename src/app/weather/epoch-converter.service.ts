import { Injectable } from '@angular/core';
import { WeatherAlert } from '../models/weather/weather-alert.models';
import { WeatherReadingHourly } from '../models/weather/weather-reading-hourly.models';

@Injectable({
  providedIn: 'root',
})
export class EpochConverterService {
  readonly daySeconds = 8.64e4;

  /**
   * Returns `Date` object given seconds
   * @param seconds number
   * @returns Date
   */
  _convertSecondsToDate(seconds: number | undefined): Date {
    if (seconds) {
      return new Date(seconds * 1000);
    }
    return new Date(0);
  }

  /**
   * Returns locale time string given UTC seconds
   * @param time UTC seconds
   * @returns string
   */
  convertToTime(time: number | undefined): string {
    return this._convertSecondsToDate(time).toLocaleTimeString();
  }

  /**
   * Returns local date and time string given UTC seconds
   * @param time UTC seconds
   * @returns string
   */
  convertToDateTime(time: number): string {
    const date = this._convertSecondsToDate(time);
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
   * Returns a number comparing the offset of days from `point`
   * * Returns 2 if `point` is 2 days ahead of `compare` (2 days ago)
   * * Returns 1 if `point` is 1 day ahead of `compare` (Yesterday)
   * * Returns 0 if both `point` and `compare` are on the same day (Today)
   * * Returns -1 if `point` is 1 day behind of `compare` (Tomorrow)
   * * Returns -2 if `point` is 2 days behind of `compare` (2 days from now/today)
   * @param point UTC time in seconds as point of comparison
   * @param compare UTC time in seconds used for comparison
   * @param offset Timezone's offset in seconds (defaults to 0)
   * @returns number
   */
  offsetDays(point: number, compare: number, offset: number = 0): number {
    const zPoint = Math.floor((point + offset) / this.daySeconds);
    const zCompare = Math.floor((compare + offset) / this.daySeconds);

    return zPoint - zCompare;
  }
}
