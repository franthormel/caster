import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherReadingHourly } from '../../models/weather/weather-reading-hourly.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';
import { WeatherModeService } from '../weather-mode.service';
import { EpochConverterService } from '../epoch-converter.service';
import { MoonPhaseService } from '../moon-phase.service';

import { AppState } from '../../app-state.reducers';
import {
  weatherIndexHourlyIncrement,
  weatherIndexHourlyDecrement,
} from '../../app-state.actions';
import { WeatherReadingDaily } from 'src/app/models/weather/weather-reading-daily.models';

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
    private epochConverterService: EpochConverterService,
    private moonphaseService: MoonPhaseService,
    private weatherModeService: WeatherModeService,
    private store: Store<{ appState: AppState }>
  ) {}

  ngOnInit() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.indexHourly = state.weatherIndexHourly;
      this.indexDaily = state.weatherIndexDaily;
    });
  }

  // Display guards
  /**
   * Date time for `WeatherReadingCurrent` NOT current time.
   */
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

  get currentWeatherHourly(): WeatherReadingHourly {
    return this.weatherData.hourly[this.indexHourly];
  }

  get timeHourly(): string {
    const pointTime = this.weatherData.hourly[0].dt;
    const compareTime = this.currentWeatherHourly.dt;

    return this.displayDateTime(compareTime, pointTime, compareTime);
  }

  hourlyPrevious() {
    this.store.dispatch(weatherIndexHourlyDecrement());
  }

  hourlyNext() {
    this.store.dispatch(weatherIndexHourlyIncrement());
  }

  // DISPLAY
  get currentWeatherDaily(): WeatherReadingDaily {
    return this.weatherData.daily[this.indexDaily];
  }

  get timeDaily(): string {
    const pointTime = this.weatherData.daily[0].dt;
    const compareTime = this.currentWeatherDaily.dt;

    return this.displayDateTime(compareTime, pointTime, compareTime);
  }

  get timeDailySunrise(): string {
    return this.epochConverterService.convertToTime(
      this.currentWeatherDaily.sunrise
    );
  }
  get timeDailySunset(): string {
    return this.epochConverterService.convertToTime(
      this.currentWeatherDaily.sunset
    );
  }

  get dailyMoonphaseIcon(): string {
    return this.moonphaseService.icon(this.currentWeatherDaily.moon_phase);
  }

  get dailyMoonphase(): string {
    return this.moonphaseService.description(
      this.currentWeatherDaily.moon_phase
    );
  }
  get timeDailyMoonrise(): string {
    return this.epochConverterService.convertToTime(
      this.currentWeatherDaily.moonrise
    );
  }
  get timeDailyMoonset(): string {
    return this.epochConverterService.convertToTime(
      this.currentWeatherDaily.moonset
    );
  }

  // Helpers
  displayDateTime(
    displayTime: number,
    pointTime: number,
    compareTime: number
  ): string {
    const offset = this.epochConverterService.offsetDays(
      pointTime,
      compareTime,
      this.weatherData.timezone_offset
    );

    if (offset === 0) {
      return `Today ${this.epochConverterService.convertToTime(displayTime)}`;
    } else if (offset === -1) {
      return `Tomorrow ${this.epochConverterService.convertToTime(
        displayTime
      )}`;
    } else {
      return this.epochConverterService.convertToDateTime(displayTime);
    }
  }
}
