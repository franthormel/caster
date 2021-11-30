import { Component, Input } from '@angular/core';

import { WeatherReadingDetail } from '../../../models/weather/weather-reading-detail.models';
import { WeatherReadingDetailFeelsLike } from '../../../models/weather/weather-reading-detail-feels-like.models';
import { WeatherReadingDetailTemperature } from '../../../models/weather/weather-reading-detail-temperature.models';
import { WeatherData } from '../../../models/weather/weather-data.models';
import { WeatherCondition } from '../../../models/weather/weather-condition.models';
import { WeatherReading } from '../../../models/weather/weather-reading.models';

import { StateManagerService } from '../../shared/services/state-manager.service';
import { StringManagerService } from '../../shared/services/string-manager.service';
import { TemperatureConverterService } from '../temperature-converter.service';

import { fadeInElement } from '../../../animations';
import { KlassManagerService } from '../../shared/services/klass-manager.service';

@Component({
  selector: 'app-weather-content-main',
  templateUrl: './weather-content-main.component.html',
  styleUrls: ['./weather-content-main.component.scss'],
  animations: [fadeInElement],
})
export class WeatherContentMainComponent {
  @Input() weatherData!: WeatherData;
  @Input() weatherLocation!: string;

  constructor(
    private klassManager: KlassManagerService,
    private stateManager: StateManagerService,
    private stringFormatter: StringManagerService,
    private temperatureConverter: TemperatureConverterService
  ) {}

  changeToFeelsLikeViewMode() {
    this.stateManager.changeWeatherDetailModeToFeelsLike();
  }

  changeToTemperatureViewMode() {
    this.stateManager.changeWeatherDetailModeToTemperature();
  }

  get cloudiness(): number {
    return this.weatherReading.clouds;
  }

  get detailModeIsTemperature(): boolean {
    return this.stateManager.weatherDetailModeIsTemperature;
  }

  get evening(): number {
    let value = -1;

    if (this.showDailyDetailReading) {
      const reading = this.weatherReadingDetail.eve;

      value = this.temperatureConverter.convertTemperature(reading);
    }

    return value;
  }

  get feelsLike(): number {
    const weather = this.weatherReading;
    let feelsLike = this.feelsLikeBasedOnMode(weather);

    feelsLike = this.temperatureConverter.convertTemperature(feelsLike);

    return feelsLike;
  }

  get humidity(): number {
    return this.weatherReading.humidity;
  }

  get max(): number {
    let value = -1;

    if (this.showDailyDetailReading) {
      const reading = this.weatherReading
        .temp as WeatherReadingDetailTemperature;

      value = this.temperatureConverter.convertTemperature(reading.max);
    }

    return value;
  }

  get min(): number {
    let value = -1;

    if (this.showDailyDetailReading) {
      const reading = this.weatherReading
        .temp as WeatherReadingDetailTemperature;

      value = this.temperatureConverter.convertTemperature(reading.min);
    }

    return value;
  }

  get morning(): number {
    let value = -1;

    if (this.showDailyDetailReading) {
      const reading = this.weatherReadingDetail.morn;

      value = this.temperatureConverter.convertTemperature(reading);
    }

    return value;
  }

  get night(): number {
    let value = -1;

    if (this.showDailyDetailReading) {
      const reading = this.weatherReadingDetail.night;

      value = this.temperatureConverter.convertTemperature(reading);
    }

    return value;
  }

  get pressure(): number {
    return this.weatherReading.pressure;
  }

  get showDailyDetailReading(): boolean {
    return this.stateManager.weatherReadingModeIsDaily;
  }

  get temperature(): string {
    let value: number | string = this.temperatureBasedOnMode(
      this.weatherReading
    );

    value = this.temperatureConverter.convertTemperature(value);

    if (this.stateManager.settingsDegreeSign) {
      value = `${value}°`;
    }

    return value.toString();
  }

  get transparentBackground(): { [klass: string]: boolean } {
    return this.klassManager.transparentBackground;
  }

  get underlineFeelsLike(): boolean {
    return this.showDailyDetailReading && this.detailModeIsFeelsLike;
  }

  get underlineTemperature(): boolean {
    return this.showDailyDetailReading && this.detailModeIsTemperature;
  }

  get weatherDescription(): string {
    return this.stringFormatter.capitalizeFirstLetter(
      this.weatherCondition.description
    );
  }

  get weatherIcon(): string {
    return this.weatherCondition.icon;
  }

  get windDirection(): string {
    let value = this.weatherReading.wind_deg.toString();

    if (this.stateManager.settingsDegreeSign) {
      value = `${value}°`;
    }

    return value;
  }

  get windGust(): number {
    return this.weatherReading.wind_gust as number;
  }

  get windGustIsPresent(): boolean {
    return this.weatherReading.wind_gust !== undefined;
  }

  get windSpeed(): number {
    return this.weatherReading.wind_speed;
  }

  private feelsLikeBasedOnMode(weather: WeatherReading): number {
    if (this.stateManager.weatherReadingModeIsDaily) {
      const reading = weather.feels_like as WeatherReadingDetailFeelsLike;

      return reading.day;
    }

    return weather.feels_like as number;
  }

  private temperatureBasedOnMode(weather: WeatherReading): number {
    if (this.stateManager.weatherReadingModeIsDaily) {
      const reading = weather.temp as WeatherReadingDetailTemperature;

      return reading.day;
    }

    return weather.temp as number;
  }

  private get detailModeIsFeelsLike(): boolean {
    return this.stateManager.weatherDetailModeIsFeelsLike;
  }

  private get weatherReading(): WeatherReading {
    let weather!: WeatherReading;

    if (this.stateManager.weatherReadingModeIsCurrent) {
      weather = this.weatherData.current;
    } else if (this.stateManager.weatherReadingModeIsHourly) {
      weather = this.weatherData.hourly[this.stateManager.weatherIndexHourly];
    } else if (this.stateManager.weatherReadingModeIsDaily) {
      weather = this.weatherData.daily[this.stateManager.weatherIndexDaily];
    }

    return weather;
  }

  private get weatherReadingDetail(): WeatherReadingDetail {
    let reading!: WeatherReadingDetail;

    if (this.detailModeIsFeelsLike) {
      reading = this.weatherReading
        .feels_like as WeatherReadingDetailTemperature;
    } else if (this.detailModeIsTemperature) {
      reading = this.weatherReading.temp as WeatherReadingDetailTemperature;
    }

    return reading;
  }

  private get weatherCondition(): WeatherCondition {
    /**
     * There might be multiple conditions present in one area,
     * but to display it easily, I choose the first weather condition.
     */
    return this.weatherReading.weather[0];
  }
}
