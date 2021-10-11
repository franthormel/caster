import { Injectable } from '@angular/core';
import { WeatherAlert } from '../models/weather/weather-alert.models';

@Injectable({
  providedIn: 'root',
})
export class EpochConverterService {
  /**
   * Converts Epoch to UTC string
   * @param time UTC seconds
   * @returns UTC string
   */
  convertTime(time: number): string {
    const date = new Date(time * 1000);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }

  alertTimeRange(alert: WeatherAlert): string {
    return `${this.convertTime(alert.start)} — ${this.convertTime(alert.end)}`;
  }
}
