import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { WeatherData } from '../../models/weather/weather-data.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';

import { WeatherModeService } from '../weather-mode.service';
import { EpochConverterService } from '../epoch-converter.service';

import { AppState } from '../../app-state.reducers';
import {
  weatherIndexHourlyIncrement,
  weatherIndexHourlyDecrement,
} from '../../app-state.actions';

@Component({
  selector: 'app-weather-content-top',
  templateUrl: './weather-content-top.component.html',
  styleUrls: ['./weather-content-top.component.css'],
})
export class WeatherContentTopComponent implements OnInit {
  @Input() weatherData!: WeatherData;
  @Input() geolocation!: Geolocation;

  appState$!: Observable<AppState>;

  indexHourly!: number;
  indexDaily!: number;

  constructor(
    private weatherModeService: WeatherModeService,
    private epochConverterService: EpochConverterService,
    private store: Store<{ appState: AppState }>
  ) {}

  ngOnInit() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.indexHourly = state.weatherIndexHourly;
      this.indexDaily = state.weatherIndexDaily;
    });
  }

  /**
   * Date time for `WeatherReadingCurrent` NOT current time.
   */
  // Display guards
  get showCurrent(): boolean {
    return (
      this.weatherModeService.isCurrent &&
      this.weatherData.current !== undefined
    );
  }
  get showHourly(): boolean {
    return (
      this.weatherModeService.isHourly &&
      this.weatherData.hourly !== undefined &&
      this.weatherData.hourly.length > 0
    );
  }
  get showDaily(): boolean {
    return (
      this.weatherModeService.isDaily &&
      this.weatherData.daily !== undefined &&
      this.weatherData.daily.length > 0
    );
  }

  // LOCATION
  get geolocationDisplay(): string {
    return this.geolocation
      ? `${this.geolocation.name}, ${this.geolocation.country}`
      : '';
  }

  // CURRENT
  get timeCurrent(): string {
    return this.epochConverterService.convertToTime(
      this.weatherData.current.dt
    );
  }
  get timeCurrentSunrise(): string {
    return this.epochConverterService.convertToTime(
      this.weatherData.current.sunrise
    );
  }
  get timeCurrentSunset(): string {
    return this.epochConverterService.convertToTime(
      this.weatherData.current.sunset
    );
  }

  // HOURLY
  get canHourlyGoBackward(): boolean {
    return this.indexHourly >= 1;
  }
  get canHourlyGoForward(): boolean {
    return this.indexHourly < environment.maxHourly - 1;
  }

  get timeHourly(): string {
    const pointWeather = this.weatherHourlyTimestamp();
    const compareWeather = this.weatherHourlyTimestamp(this.indexHourly);

    const offset = this.epochConverterService.offsetDays(
      pointWeather,
      compareWeather,
      this.weatherData.timezone_offset
    );

    if (offset === 0) {
      // Today
      return `Today ${this.epochConverterService.convertToTime(
        compareWeather
      )}`;
    } else if (offset === -1) {
      // Tomorrow
      return `Tomorrow ${this.epochConverterService.convertToTime(
        compareWeather
      )}`;
    } else {
      // Use date time for everything else
      return this.epochConverterService.convertToDateTime(compareWeather);
    }
  }

  weatherHourlyTimestamp(index = 0): number {
    return this.weatherData.hourly[index].dt;
  }

  hourlyPrevious() {
    this.store.dispatch(weatherIndexHourlyDecrement());
  }

  hourlyNext() {
    this.store.dispatch(weatherIndexHourlyIncrement());
  }

  // DISPLAY
}
