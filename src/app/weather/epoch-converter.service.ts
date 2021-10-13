import { Injectable } from '@angular/core';
import { WeatherAlert } from '../models/weather/weather-alert.models';

@Injectable({
  providedIn: 'root',
})
export class EpochConverterService {
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
}
