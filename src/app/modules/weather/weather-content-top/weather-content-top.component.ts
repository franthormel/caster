import { Component, Input } from '@angular/core';

import { WeatherAlert } from '../../../models/weather/weather-alert.models';
import { WeatherData } from '../../../models/weather/weather-data.models';
import { WeatherReadingDaily } from '../../../models/weather/weather-reading-daily.models';

import { WeatherReadingCurrent } from '../../../models/weather/weather-reading-current.models';
import { WeatherReadingHourly } from '../../../models/weather/weather-reading-hourly.models';

import { DialogHandlerService } from '../../shared/services/dialog-handler.service';
import { EpochConverterService } from '../../shared/services/epoch-converter.service';
import { MoonPhaseService } from '../moon-phase.service';
import { StateManagerService } from '../../shared/services/state-manager.service';

import { fadeInElement } from '../../../animations';

@Component({
  selector: 'app-weather-content-top',
  templateUrl: './weather-content-top.component.html',
  styleUrls: ['./weather-content-top.component.scss'],
  animations: [fadeInElement],
})
export class WeatherContentTopComponent {
  @Input() weatherData!: WeatherData;

  constructor(
    public stateManager: StateManagerService,
    private dialogHandler: DialogHandlerService,
    private epochConverter: EpochConverterService,
    private moonphase: MoonPhaseService
  ) {}

  dailyNext() {
    this.stateManager.incrementWeatherIndexDaily();
  }

  dailyPrevious() {
    this.stateManager.decrementWeatherIndexDaily();
  }

  hourlyNext() {
    this.stateManager.incrementWeatherIndexHourly();
  }

  hourlyPrevious() {
    this.stateManager.decrementWeatherIndexHourly();
  }

  showAlertDialog() {
    this.dialogHandler.showWeatherAlert(this.alerts, true);
  }

  get alertsAreAvailable(): boolean {
    return this.alertsCount > 0;
  }

  get alertsButtonText(): string {
    let value = 'Alert';

    if (this.alertsCount > 1) {
      value += 's';
    }

    return value;
  }

  get alertsButtonTooltip(): string {
    let value = 'Alert';

    if (this.alertsCount > 1) {
      value += 's';
    }

    value += ' from weather warning systems';

    return value;
  }

  get alertsCount(): number {
    return this.alerts ? this.alerts.length : 0;
  }

  get currentTime(): string {
    return this.epochConverter.toTime(this.currentWeather.dt);
  }

  get currentTimeSunrise(): string {
    let value = '';

    if (this.currentModeIsCurrent) {
      value = this.epochConverter.toTime(this.currentWeather.sunrise!);
    }
    return value;
  }

  get currentTimeSunset(): string {
    let value = '';

    if (this.currentModeIsCurrent) {
      value = this.epochConverter.toTime(this.currentWeather.sunset!);
    }

    return value;
  }

  get dailyTime(): string {
    const compare = this.currentDailyWeather;
    const point = this.weatherData.daily[0];

    const compareTime = compare.dt;
    const pointTime = point.dt;
    const offset = this.weatherData.timezone_offset;

    return this.epochConverter.displayDateTime(pointTime, compareTime, offset);
  }

  get dailyMoonphase(): string {
    return this.moonphase.description(this.currentDailyWeather.moon_phase);
  }

  get dailyMoonphaseIcon(): string {
    return this.moonphase.icon(this.currentDailyWeather.moon_phase);
  }

  get dailyTimeMoonrise(): string {
    return this.epochConverter.toTime(this.currentDailyWeather.moonrise);
  }

  get dailyTimeMoonset(): string {
    return this.epochConverter.toTime(this.currentDailyWeather.moonset);
  }

  get dailyTimeSunrise(): string {
    let value = '';

    if (this.currentModeIsDaily) {
      value = this.epochConverter.toTime(this.currentDailyWeather.sunrise!);
    }
    return value;
  }

  get dailyTimeSunset(): string {
    let value = '';

    if (this.currentModeIsDaily) {
      value = this.epochConverter.toTime(this.currentDailyWeather.sunset!);
    }

    return value;
  }

  get hourlyTime(): string {
    const compare = this.currentHourlyWeather;
    const point = this.weatherData.hourly[0];

    const compareTime = compare.dt;
    const pointTime = point.dt;
    const offset = this.weatherData.timezone_offset;

    return this.epochConverter.displayDateTime(pointTime, compareTime, offset);
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
    return this.stateManager.weatherReadingMode;
  }

  private get alerts(): WeatherAlert[] | undefined {
    return this.weatherData.alerts;
  }

  private get currentWeather(): WeatherReadingCurrent {
    return this.weatherData.current;
  }

  private get currentDailyWeather(): WeatherReadingDaily {
    return this.weatherData.daily[this.stateManager.weatherIndexDaily];
  }

  private get currentHourlyWeather(): WeatherReadingHourly {
    return this.weatherData.hourly[this.stateManager.weatherIndexHourly];
  }

  private get currentModeIsCurrent(): boolean {
    return this.stateManager.weatherReadingModeIsCurrent;
  }

  private get currentModeIsDaily(): boolean {
    return this.stateManager.weatherReadingModeIsDaily;
  }

  private get currentModeIsHourly(): boolean {
    return this.stateManager.weatherReadingModeIsHourly;
  }
}
