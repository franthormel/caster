import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { environment } from '../../../environments/environment';

import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherReadingDaily } from '../../models/weather/weather-reading-daily.models';
import { WeatherGeolocation } from '../../models/geolocation/geolocation.models';

import { MoonPhaseService } from '../moon-phase.service';
import { EpochConverterService } from '../../epoch-converter.service';
import { WeatherStateManagerService } from '../weather-state-manager.service';

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
    private weatherStateManager: WeatherStateManagerService
  ) {}

  dailyNext() {
    if (this.canDailyGoForward) {
      this.weatherStateManager.indexDailyIncrement();
    }
  }

  dailyPrevious() {
    if (this.canDailyGoBackward) {
      this.weatherStateManager.indexDailyDecrement();
    }
  }

  hourlyNext() {
    if (this.canHourlyGoForward) {
      this.weatherStateManager.indexHourlyIncrement();
    }
  }

  hourlyPrevious() {
    if (this.canHourlyGoBackward) {
      this.weatherStateManager.indexHourlyDecrement();
    }
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

  get formattedLocation(): string {
    return this.geolocation
      ? `${this.geolocation.name}, ${this.geolocation.country}`
      : `${this.weatherData.lat}, ${this.weatherData.lon}`;
  }

  get hourlyTime(): string {
    const pointTime = this.weatherData.hourly[0].dt;
    const compareTime =
      this.weatherData.hourly[this.weatherStateManager.indexHourly].dt;

    return this.displayDateTime(compareTime, pointTime, compareTime);
  }

  get dailyTime(): string {
    const pointTime = this.weatherData.daily[0].dt;
    const compareTime = this.currentDailyWeather.dt;

    return this.displayDateTime(compareTime, pointTime, compareTime);
  }

  get dailyMoonphase(): string {
    return this.moonphase.description(this.currentDailyWeather.moon_phase);
  }

  get dailyMoonphaseIcon(): string {
    return this.moonphase.icon(this.currentDailyWeather.moon_phase);
  }

  get dailyTimeMoonrise(): string {
    return this.epochConverter.convertToTime(this.currentDailyWeather.moonrise);
  }

  get dailyTimeMoonset(): string {
    return this.epochConverter.convertToTime(this.currentDailyWeather.moonset);
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

  get showCurrent(): boolean {
    return this.currentModeIsCurrent && this.weatherData.current !== undefined;
  }

  get showDaily(): boolean {
    return (
      this.currentModeIsDaily &&
      this.weatherData.daily !== undefined &&
      this.weatherData.daily.length > 0
    );
  }

  get showHourly(): boolean {
    return (
      this.weatherStateManager.isHourly &&
      this.weatherData.hourly !== undefined &&
      this.weatherData.hourly.length > 0
    );
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

  private get canDailyGoBackward(): boolean {
    return this.weatherStateManager.indexDaily >= 1;
  }

  private get canDailyGoForward(): boolean {
    return this.weatherStateManager.indexDaily < environment.maxDaily - 1;
  }

  private get canHourlyGoBackward(): boolean {
    return this.weatherStateManager.indexHourly >= 1;
  }

  private get canHourlyGoForward(): boolean {
    return this.weatherStateManager.indexHourly < environment.maxHourly - 1;
  }

  private get currentDailyWeather(): WeatherReadingDaily {
    return this.weatherData.daily[this.weatherStateManager.indexDaily];
  }

  private get currentModeIsCurrent(): boolean {
    return this.weatherStateManager.isCurrent;
  }

  private get currentModeIsDaily(): boolean {
    return this.weatherStateManager.isDaily;
  }
}
