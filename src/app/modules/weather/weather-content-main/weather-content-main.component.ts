import { Component, Input } from '@angular/core';

import { WeatherReadingDetailFeelsLike } from '../../../models/weather/weather-reading-detail-feels-like.models';
import { WeatherReadingDetailTemperature } from '../../../models/weather/weather-reading-detail-temperature.models';
import { WeatherData } from '../../../models/weather/weather-data.models';
import { WeatherCondition } from '../../../models/weather/weather-condition.models';
import { WeatherReading } from '../../../models/weather/weather-reading.models';

import { StringParserService } from '../../shared/services/string-parser.service';
import { TemperatureConverterService } from '../temperature-converter.service';
import { StateManagerService } from '../../shared/services/state-manager.service';

@Component({
  selector: 'app-weather-content-main',
  templateUrl: './weather-content-main.component.html',
  styleUrls: ['./weather-content-main.component.scss'],
})
export class WeatherContentMainComponent {
  @Input() weatherData!: WeatherData;
  @Input() weatherLocation!: string;

  constructor(
    private stringFormatter: StringParserService,
    private temperatureConverter: TemperatureConverterService,
    private stateManager: StateManagerService
  ) {}

  changeToFeelsLikeViewMode() {
    this.stateManager.changeDetailModeToFeelsLike();
  }

  changeToTemperatureViewMode() {
    this.stateManager.changeDetailModeToTemperature();
  }

  get cloudiness(): number {
    return this.weatherReading.clouds;
  }

  get detailModeIsTemperature(): boolean {
    return this.stateManager.detailModeIsTemperature;
  }

  get evening(): number {
    if (this.showDailyDetailReading) {
      const reading = this.weatherReading
        .temp as WeatherReadingDetailTemperature;

      return this.temperatureConverter.convertKelvinToCelsius(reading.eve);
    }

    return -1;
  }

  get feelsLike(): number {
    const weather = this.weatherReading;
    let feelsLike = this.feelsLikeBasedOnMode(weather);

    feelsLike = this.temperatureConverter.convertKelvinToCelsius(feelsLike);

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

      value = this.temperatureConverter.convertKelvinToCelsius(reading.max);
    }

    return value;
  }

  get min(): number {
    let value = -1;

    if (this.showDailyDetailReading) {
      const reading = this.weatherReading
        .temp as WeatherReadingDetailTemperature;

      value = this.temperatureConverter.convertKelvinToCelsius(reading.min);
    }

    return value;
  }

  get morning(): number {
    let value = -1;

    if (this.showDailyDetailReading) {
      const reading = this.weatherReading
        .temp as WeatherReadingDetailTemperature;

      value = this.temperatureConverter.convertKelvinToCelsius(reading.morn);
    }

    return value;
  }

  get night(): number {
    let value = -1;

    if (this.showDailyDetailReading) {
      const reading = this.weatherReading
        .temp as WeatherReadingDetailTemperature;

      value = this.temperatureConverter.convertKelvinToCelsius(reading.night);
    }

    return value;
  }

  get pressure(): number {
    return this.weatherReading.pressure;
  }

  get showDailyDetailReading(): boolean {
    return this.stateManager.readingModeIsDaily;
  }

  get temperature(): number {
    const weather = this.weatherReading;
    let temperature = this.temperatureBasedOnMode(weather);

    temperature = this.temperatureConverter.convertKelvinToCelsius(temperature);

    return temperature;
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

  get windDirection(): number {
    return this.weatherReading.wind_deg;
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
    if (this.stateManager.readingModeIsDaily) {
      const reading = weather.feels_like as WeatherReadingDetailFeelsLike;

      return reading.day;
    }

    return weather.feels_like as number;
  }

  private temperatureBasedOnMode(weather: WeatherReading): number {
    if (this.stateManager.readingModeIsDaily) {
      const reading = weather.temp as WeatherReadingDetailTemperature;

      return reading.day;
    }

    return weather.temp as number;
  }

  private get detailModeIsFeelsLike(): boolean {
    return this.stateManager.detailModeIsFeelsLike;
  }

  private get weatherReading(): WeatherReading {
    let weather!: WeatherReading;

    if (this.stateManager.readingModeIsCurrent) {
      weather = this.weatherData.current;
    } else if (this.stateManager.readingModeIsHourly) {
      weather = this.weatherData.hourly[this.stateManager.indexHourly];
    } else if (this.stateManager.readingModeIsDaily) {
      weather = this.weatherData.daily[this.stateManager.indexDaily];
    }

    return weather;
  }

  private get weatherCondition(): WeatherCondition {
    /**
     * There might be multiple conditions present in one area,
     * but to display it easily, I choose the first weather condition.
     */
    return this.weatherReading.weather[0];
  }
}
