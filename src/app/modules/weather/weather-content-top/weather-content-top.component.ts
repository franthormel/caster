import { Component, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { WeatherAlert } from '../../../models/weather/weather-alert.models';
import { WeatherData } from '../../../models/weather/weather-data.models';
import { WeatherReadingDaily } from '../../../models/weather/weather-reading-daily.models';

import { MoonPhaseService } from '../moon-phase.service';
import { EpochConverterService } from '../../shared/services/epoch-converter.service';
import { StateManagerService } from '../../shared/services/state-manager.service';
import { WeatherAlertComponent } from '../weather-alert/weather-alert.component';

@Component({
  selector: 'app-weather-content-top',
  templateUrl: './weather-content-top.component.html',
  styleUrls: ['./weather-content-top.component.scss'],
})
export class WeatherContentTopComponent {
  @Input() weatherData!: WeatherData;

  constructor(
    public stateManager: StateManagerService,
    private dialog: MatDialog,
    private epochConverter: EpochConverterService,
    private moonphase: MoonPhaseService
  ) {}

  dailyNext() {
    this.stateManager.indexDailyIncrement();
  }

  dailyPrevious() {
    this.stateManager.indexDailyDecrement();
  }

  hourlyNext() {
    this.stateManager.indexHourlyIncrement();
  }

  hourlyPrevious() {
    this.stateManager.indexHourlyDecrement();
  }


  // TODO Move to dialogshowservice
  showAlertDialog() {
    this.dialog.open(WeatherAlertComponent, {
      data: this.alerts,
      disableClose: true,
    });
  }

  get alertsAreAvailable(): boolean {
    return this.alertsCount > 0;
  }

  get alertsCount(): number {
    return this.alerts ? this.alerts.length : 0;
  }

  get currentTime(): string {
    return this.epochConverter.convertToTime(this.weatherData.current.dt);
  }

  get currentTimeSunrise(): string {
    let value = '';

    if (this.currentModeIsCurrent) {
      value = this.epochConverter.convertToTime(
        this.weatherData.current.sunrise!
      );
    }
    return value;
  }

  get currentTimeSunset(): string {
    let value = '';

    if (this.currentModeIsCurrent) {
      value = this.epochConverter.convertToTime(
        this.weatherData.current.sunset!
      );
    }

    return value;
  }

  get dailyTime(): string {
    const compare = this.currentDailyWeather;
    const point = this.weatherData.daily[0];
    const compareTime = compare.dt;
    const pointTime = point.dt;

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
    let value = '';

    if (this.currentModeIsDaily) {
      value = this.epochConverter.convertToTime(
        this.currentDailyWeather.sunrise!
      );
    }
    return value;
  }

  get dailyTimeSunset(): string {
    let value = '';

    if (this.currentModeIsDaily) {
      value = this.epochConverter.convertToTime(
        this.currentDailyWeather.sunset!
      );
    }

    return value;
  }

  get hourlyTime(): string {
    const compare = this.weatherData.hourly[this.stateManager.indexHourly];
    const point = this.weatherData.hourly[0];
    const compareTime = compare.dt;
    const pointTime = point.dt;

    return this.displayDateTime(compareTime, pointTime, compareTime);
  }

  get showCurrent(): boolean {
    return this.currentModeIsCurrent;
  }

  get showDaily(): boolean {
    return this.currentModeIsDaily && this.weatherData.daily.length > 0;
  }

  get showHourly(): boolean {
    return this.currentModeIsHourly && this.weatherData.hourly.length > 0;
  }

  get titleViewMode(): string {
    return this.stateManager.readingMode;
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

  private get alerts(): WeatherAlert[] | undefined {
    const alerts = this.weatherData.alerts;

    return alerts !== undefined ? alerts : undefined;
  }

  private get currentDailyWeather(): WeatherReadingDaily {
    return this.weatherData.daily[this.stateManager.indexDaily];
  }

  private get currentModeIsCurrent(): boolean {
    return this.stateManager.readingModeIsCurrent;
  }

  private get currentModeIsDaily(): boolean {
    return this.stateManager.readingModeIsDaily;
  }

  private get currentModeIsHourly(): boolean {
    return this.stateManager.readingModeIsHourly;
  }
}
