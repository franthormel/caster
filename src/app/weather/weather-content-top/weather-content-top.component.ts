import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';

import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherReadingDaily } from '../../models/weather/weather-reading-daily.models';
import { WeatherGeolocation } from '../../models/geolocation/geolocation.models';

import { MoonPhaseService } from '../moon-phase.service';
import { EpochConverterService } from '../../shared/epoch-converter.service';
import { WeatherModeService } from '../weather-mode.service';
import { WeatherStateIndexerService } from '../weather-state-indexer.service';

import { AppState } from '../../app-state.reducers';
import * as weather from '../weather-state.actions';

@Component({
  selector: 'app-weather-content-top',
  templateUrl: './weather-content-top.component.html',
  styleUrls: ['./weather-content-top.component.scss'],
})
export class WeatherContentTopComponent {
  @Input() weatherData!: WeatherData;
  @Input() geolocation: WeatherGeolocation | undefined;

  constructor(
    private epochConverter: EpochConverterService,
    private moonphase: MoonPhaseService,
    private weatherMode: WeatherModeService,
    private store: Store<{ appState: AppState }>,
    private weatherStateIndexer: WeatherStateIndexerService
  ) {}

  get formattedLocation(): string {
    return this.geolocation
      ? `${this.geolocation.name}, ${this.geolocation.country}`
      : `${this.weatherData.lat}, ${this.weatherData.lon}`;
  }

  // CURRENT
  get showCurrent(): boolean {
    return this.currentModeIsCurrent && this.weatherData.current !== undefined;
  }

  private get currentModeIsCurrent(): boolean {
    return this.weatherMode.isCurrent;
  }

  get currentTime(): string {
    return this.epochConverter.convertToTime(this.weatherData.current.dt);
  }

  get currentTimeSunrise(): string {
    if (this.currentModeIsCurrent) {
      return this.epochConverter.convertToTime(
        this.weatherData.current.sunrise!
      );
    }
    return '';
  }

  get currentTimeSunset(): string {
    if (this.currentModeIsCurrent) {
      return this.epochConverter.convertToTime(
        this.weatherData.current.sunset!
      );
    }
    return '';
  }

  // HOURLY
  get showHourly(): boolean {
    return (
      this.weatherMode.isHourly &&
      this.weatherData.hourly !== undefined &&
      this.weatherData.hourly.length > 0
    );
  }

  previousHourlyWeather() {
    if (this.canHourlyGoBackward) {
      this.store.dispatch(weather.indexHourlyDecrement());
    }
  }

  private get canHourlyGoBackward(): boolean {
    return this.weatherStateIndexer.indexHourly >= 1;
  }

  nextHourlyWeather() {
    if (this.canHourlyGoForward) {
      this.store.dispatch(weather.indexHourlyIncrement());
    }
  }

  private get canHourlyGoForward(): boolean {
    return this.weatherStateIndexer.indexHourly < environment.maxHourly - 1;
  }

  get hourlyTime(): string {
    const pointTime = this.weatherData.hourly[0].dt;
    const compareTime =
      this.weatherData.hourly[this.weatherStateIndexer.indexHourly].dt;

    return this.displayDateTime(compareTime, pointTime, compareTime);
  }

  // DAILY
  get showDaily(): boolean {
    return (
      this.currentModeIsDaily &&
      this.weatherData.daily !== undefined &&
      this.weatherData.daily.length > 0
    );
  }

  private get currentModeIsDaily(): boolean {
    return this.weatherMode.isDaily;
  }

  get dailyTimeSunrise(): string {
    if (this.currentModeIsDaily) {
      return this.epochConverter.convertToTime(
        this.currentDailyWeather.sunrise!
      );
    }
    return '';
  }

  get dailyTimeSunset(): string {
    if (this.currentModeIsDaily) {
      return this.epochConverter.convertToTime(
        this.currentDailyWeather.sunset!
      );
    }
    return '';
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
      this.store.dispatch(weather.indexDailyDecrement());
    }
  }

  private get canDailyGoBackward(): boolean {
    return this.weatherStateIndexer.indexDaily >= 1;
  }

  dailyNext() {
    if (this.canDailyGoForward) {
      this.store.dispatch(weather.indexDailyIncrement());
    }
  }

  private get canDailyGoForward(): boolean {
    return this.weatherStateIndexer.indexDaily < environment.maxDaily - 1;
  }

  get dailyTime(): string {
    const pointTime = this.weatherData.daily[0].dt;
    const compareTime = this.currentDailyWeather.dt;

    return this.displayDateTime(compareTime, pointTime, compareTime);
  }

  private get currentDailyWeather(): WeatherReadingDaily {
    return this.weatherData.daily[this.weatherStateIndexer.indexDaily];
  }

  /**
   * Prepends either 'Today', 'Tomorrow' or neither depending on `point` and `compare`
   * @param display UTC seconds to display
   * @param point UTC seconds
   * @param compare UTC seconds
   * @returns string
   */
  private displayDateTime(
    display: number,
    point: number,
    compare: number
  ): string {
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
