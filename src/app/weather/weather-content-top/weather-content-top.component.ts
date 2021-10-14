import { Component, Input } from '@angular/core';

import { WeatherData } from '../../models/weather/weather-data.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';

import { WeatherModeService } from '../weather-mode.service';
import { EpochConverterService } from '../epoch-converter.service';

@Component({
  selector: 'app-weather-content-top',
  templateUrl: './weather-content-top.component.html',
  styleUrls: ['./weather-content-top.component.css'],
})
export class WeatherContentTopComponent {
  @Input() weatherData: WeatherData | undefined;
  @Input() geolocation: Geolocation | undefined;

  constructor(
    private weatherModeService: WeatherModeService,
    private epochConverterService: EpochConverterService
  ) {}

  /**
   * Date time for `WeatherReadingCurrent` NOT current time.
   */
  // Display guards
  get showCurrent(): boolean {
    return (
      this.weatherModeService.isCurrent &&
      this.weatherData?.current !== undefined
    );
  }
  get showHourly(): boolean {
    return (
      this.weatherModeService.isHourly &&
      this.weatherData?.hourly !== undefined &&
      this.weatherData.hourly.length > 0
    );
  }
  get showDaily(): boolean {
    return (
      this.weatherModeService.isDaily &&
      this.weatherData?.daily !== undefined &&
      this.weatherData.daily.length > 0
    );
  }

  // Location display
  get geolocationDisplay(): string {
    return this.geolocation
      ? `${this.geolocation.name}, ${this.geolocation.country}`
      : '';
  }

  // Time display (Current)
  get timeCurrent(): string {
    return this.epochConverterService.convertToTime(
      this.weatherData?.current.dt
    );
  }
  get timeCurrentSunrise(): string {
    return this.epochConverterService.convertToTime(
      this.weatherData?.current.sunrise
    );
  }
  get timeCurrentSunset(): string {
    return this.epochConverterService.convertToTime(
      this.weatherData?.current.sunset
    );
  }

  // Time display (Hourly)

  // Time display (Daily)
}
