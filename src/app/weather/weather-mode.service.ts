import { Injectable } from '@angular/core';
import { WeatherReadingType } from '../models/weather/weather.enums';

@Injectable({
  providedIn: 'root',
})
export class WeatherModeService {
  isCurrent(mode: WeatherReadingType | undefined): boolean {
    return mode === WeatherReadingType.Current;
  }

  isHourly(mode: WeatherReadingType | undefined): boolean {
    return mode === WeatherReadingType.Hourly;
  }

  isDaily(mode: WeatherReadingType | undefined): boolean {
    return mode === WeatherReadingType.Daily;
  }
}
