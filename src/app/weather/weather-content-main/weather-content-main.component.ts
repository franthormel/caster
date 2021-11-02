import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ReadingDetailFeelsLike } from '../../models/weather/reading-detail-feels-like.models';
import { ReadingDetailTemperature } from '../../models/weather/reading-detail-temperature.models';
import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherCondition } from '../../models/weather/weather-condition.models';
import { WeatherReading } from '../../models/weather/weather-reading.models';
import { WeatherDailyDetailViewMode } from '../../models/weather/weather.enums';

import { StringParserService } from '../../string-parser.service';
import { TemperatureConverterService } from '../temperature-converter.service';
import { WeatherStateManagerService } from '../weather-state-manager.service';

import { AppState } from '../../app-state.reducers';
import { detailViewTypeUpdate } from '../weather-state.actions';

@Component({
  selector: 'app-weather-content-main',
  templateUrl: './weather-content-main.component.html',
  styleUrls: ['./weather-content-main.component.scss'],
})
export class WeatherContentMainComponent implements OnInit {
  @Input() weatherData!: WeatherData;

  private appState$!: Observable<AppState>;
  private dailyDetailViewMode!: WeatherDailyDetailViewMode;

  constructor(
    private store: Store<{ appState: AppState }>,
    private stringFormatter: StringParserService,
    private temperatureConverter: TemperatureConverterService,
    private weatherStateManager: WeatherStateManagerService,
  ) {}

  ngOnInit() {
    this.initDailyDetailViewMode();
  }

  changeToFeelsLikeViewMode() {
    this.updateStateDailyDetailViewMode(WeatherDailyDetailViewMode.FeelsLike);
  }

  changeToTemperatureViewMode() {
    this.updateStateDailyDetailViewMode(WeatherDailyDetailViewMode.Temperature);
  }

  get cloudiness(): number {
    return this.weatherReading.clouds;
  }

  get dailyDetailReadingModeIsTemperature(): boolean {
    return this.dailyDetailViewMode === WeatherDailyDetailViewMode.Temperature;
  }

  get evening(): number {
    if (this.showDailyDetailReading) {
      const reading = this.weatherReading.temp as ReadingDetailTemperature;

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
    if (this.showDailyDetailReading) {
      const reading = this.weatherReading.temp as ReadingDetailTemperature;

      return this.temperatureConverter.convertKelvinToCelsius(reading.max);
    }

    return -1;
  }

  get min(): number {
    if (this.showDailyDetailReading) {
      const reading = this.weatherReading.temp as ReadingDetailTemperature;

      return this.temperatureConverter.convertKelvinToCelsius(reading.min);
    }

    return -1;
  }

  get morning(): number {
    if (this.showDailyDetailReading) {
      const reading = this.weatherReading.temp as ReadingDetailTemperature;

      return this.temperatureConverter.convertKelvinToCelsius(reading.morn);
    }

    return -1;
  }

  get night(): number {
    if (this.showDailyDetailReading) {
      const reading = this.weatherReading.temp as ReadingDetailTemperature;

      return this.temperatureConverter.convertKelvinToCelsius(reading.night);
    }

    return -1;
  }

  get pressure(): number {
    return this.weatherReading.pressure;
  }

  get showDailyDetailReading(): boolean {
    return this.weatherStateManager.isDaily;
  }

  get temperature(): number {
    const weather = this.weatherReading;
    let temperature = this.temperatureBasedOnMode(weather);

    temperature = this.temperatureConverter.convertKelvinToCelsius(temperature);

    return temperature;
  }

  get underlineFeelsLike(): boolean {
    return (
      this.showDailyDetailReading && this.dailyDetailReadingModeIsFeelsLike
    );
  }

  get underlineTemperature(): boolean {
    return (
      this.showDailyDetailReading && this.dailyDetailReadingModeIsTemperature
    );
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

  private get weatherReading(): WeatherReading {
    let weather!: WeatherReading;

    if (this.weatherStateManager.isCurrent) {
      weather = this.weatherData.current;
    } else if (this.weatherStateManager.isHourly) {
      weather = this.weatherData.hourly[this.weatherStateManager.indexHourly];
    } else if (this.weatherStateManager.isDaily) {
      weather = this.weatherData.daily[this.weatherStateManager.indexDaily];
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

  private get dailyDetailReadingModeIsFeelsLike(): boolean {
    return this.dailyDetailViewMode === WeatherDailyDetailViewMode.FeelsLike;
  }

  private feelsLikeBasedOnMode(weather: WeatherReading): number {
    if (this.weatherStateManager.isDaily) {
      const reading = weather.feels_like as ReadingDetailFeelsLike;

      return reading.day;
    }

    return weather.feels_like as number;
  }

  private initDailyDetailViewMode() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.dailyDetailViewMode = state.weatherState.dailyDetailViewMode;
    });
  }

  private temperatureBasedOnMode(weather: WeatherReading): number {
    if (this.weatherStateManager.isDaily) {
      const reading = weather.temp as ReadingDetailTemperature;

      return reading.day;
    }

    return weather.temp as number;
  }

  private updateStateDailyDetailViewMode(mode: WeatherDailyDetailViewMode) {
    this.store.dispatch(
      detailViewTypeUpdate({
        dailyDetailViewMode: mode,
      })
    );
  }
}
