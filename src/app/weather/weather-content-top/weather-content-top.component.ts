import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherReadingHourly } from '../../models/weather/weather-reading-hourly.models';
import { WeatherReadingDaily } from 'src/app/models/weather/weather-reading-daily.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';
import { WeatherModeService } from '../weather-mode.service';
import { EpochConverterService } from '../../shared/epoch-converter.service';
import { MoonPhaseService } from '../moon-phase.service';

import { AppState } from '../../app-state.reducers';
import * as actions from '../../app-state.actions';

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
    private epochConverter: EpochConverterService,
    private moonphase: MoonPhaseService,
    private weatherMode: WeatherModeService,
    private store: Store<{ appState: AppState }>
  ) {}

  ngOnInit() {
    this.initIndexes();
  }

  // TODO Consider moving this to a service, since `weather-content-main` also uses this
  initIndexes() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.indexHourly = state.weatherIndexHourly;
      this.indexDaily = state.weatherIndexDaily;
    });
  }

  get showCurrent(): boolean {
    return this.weatherMode.isCurrent && this.weatherData.current !== undefined;
  }
  get showHourly(): boolean {
    return (
      this.weatherMode.isHourly &&
      this.weatherData.hourly !== undefined &&
      this.weatherData.hourly.length > 0
    );
  }
  get showDaily(): boolean {
    return (
      this.weatherMode.isDaily &&
      this.weatherData.daily !== undefined &&
      this.weatherData.daily.length > 0
    );
  }

  get formattedLocation(): string {
    return this.geolocation
      ? `${this.geolocation.name}, ${this.geolocation.country}`
      : '';
  }

  // CURRENT
  get currentTime(): string {
    return this.epochConverter.convertToTime(this.weatherData.current.dt);
  }
  get currentTimeSunrise(): string {
    return this.epochConverter.convertToTime(this.weatherData.current.sunrise);
  }
  get currentTimeSunset(): string {
    return this.epochConverter.convertToTime(this.weatherData.current.sunset);
  }

  // HOURLY
  private get canHourlyGoBackward(): boolean {
    return this.indexHourly >= 1;
  }
  private get canHourlyGoForward(): boolean {
    return this.indexHourly < environment.maxHourly - 1;
  }

  get currentHourlyWeather(): WeatherReadingHourly {
    return this.weatherData.hourly[this.indexHourly];
  }

  get hourlyTime(): string {
    const pointTime = this.weatherData.hourly[0].dt;
    const compareTime = this.currentHourlyWeather.dt;

    return this.displayDateTime(compareTime, pointTime, compareTime);
  }

  previousHourlyWeather() {
    if (this.canHourlyGoBackward) {
      this.store.dispatch(actions.weatherIndexHourlyDecrement());
    }
  }

  nextHourlyWeather() {
    if (this.canHourlyGoForward) {
      this.store.dispatch(actions.weatherIndexHourlyIncrement());
    }
  }

  // DAILY
  private get canDailyGoBackward(): boolean {
    return this.indexDaily >= 1;
  }
  private get canDailyGoForward(): boolean {
    return this.indexDaily < environment.maxDaily - 1;
  }

  get currentDailyWeather(): WeatherReadingDaily {
    return this.weatherData.daily[this.indexDaily];
  }

  get weatherDailyMaxDate(): Date {
    return this.epochConverter.convertToDate(this.weatherData.daily[0].dt);
  }

  get weatherDailyMinDate(): Date {
    const dailyWeathers = this.weatherData.daily;
    const lastIndex = dailyWeathers.length - 1;
    return this.epochConverter.convertToDate(dailyWeathers[lastIndex].dt);
  }

  get weatherDailySelectedDate(): Date {
    return this.epochConverter.convertToDate(this.currentDailyWeather.dt);
  }

  get dailyTime(): string {
    const pointTime = this.weatherData.daily[0].dt;
    const compareTime = this.currentDailyWeather.dt;

    return this.displayDateTime(compareTime, pointTime, compareTime);
  }

  get dailyTimeSunrise(): string {
    return this.epochConverter.convertToTime(this.currentDailyWeather.sunrise);
  }
  get dailyTimeSunset(): string {
    return this.epochConverter.convertToTime(this.currentDailyWeather.sunset);
  }

  get dailyMoonphaseIcon(): string {
    return this.moonphase.icon(this.currentDailyWeather.moon_phase);
  }

  get dailyMoonphase(): string {
    return this.moonphase.description(this.currentDailyWeather.moon_phase);
  }
  get dailyTimeMoonrise(): string {
    return this.epochConverter.convertToTime(this.currentDailyWeather.moonrise);
  }
  get dailyTimeMoonset(): string {
    return this.epochConverter.convertToTime(this.currentDailyWeather.moonset);
  }

  dailyPrevious() {
    if (this.canDailyGoBackward) {
      this.store.dispatch(actions.weatherIndexDailyDecrement());
    }
  }

  dailyNext() {
    if (this.canDailyGoForward) {
      this.store.dispatch(actions.weatherIndexDailyIncrement());
    }
  }

  /**
   * Prepends either 'Today', 'Tomorrow' or neither depending on `point` and `compare`
   * @param display UTC seconds to display
   * @param point UTC seconds
   * @param compare UTC seconds
   * @returns string
   */
  displayDateTime(display: number, point: number, compare: number): string {
    const offset = this.epochConverter.offsetDays(
      point,
      compare,
      this.weatherData.timezone_offset
    );

    if (offset === 0) {
      return `Today ${this.epochConverter.convertToTime(display)}`;
    } else if (offset === -1) {
      return `Tomorrow ${this.epochConverter.convertToTime(display)}`;
    } else {
      return this.epochConverter.convertToDateTime(display);
    }
  }
}
