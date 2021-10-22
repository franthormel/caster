import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ReadingDetailFeelsLike } from '../../models/weather/reading-detail-feels-like.models';
import { ReadingDetailTemperature } from '../../models/weather/reading-detail-temperature.models';
import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherCondition } from '../../models/weather/weather-condition.models';
import { WeatherReading } from '../../models/weather/weather-reading.models';
import { WeatherDailyDetailViewMode } from '../../models/weather/weather.enums';

import { StringFormatterService } from '../../shared/string-formatter.service';
import { TemperatureConverterService } from '../temperature-converter.service';
import { WeatherModeService } from '../weather-mode.service';
import { WeatherStateIndexerService } from '../weather-state-indexer.service';

import { AppState } from '../../app-state.reducers';
import * as actions from '../../app-state.actions';

@Component({
  selector: 'app-weather-content-main',
  templateUrl: './weather-content-main.component.html',
  styleUrls: ['./weather-content-main.component.scss'],
})
export class WeatherContentMainComponent implements OnInit {
  @Input() weatherData!: WeatherData;

  private appState$!: Observable<AppState>;
  private mode!: WeatherDailyDetailViewMode;

  constructor(
    private store: Store<{ appState: AppState }>,
    private stringFormatter: StringFormatterService,
    private temperatureConverter: TemperatureConverterService,
    private weatherMode: WeatherModeService,
    private weatherStateIndexer: WeatherStateIndexerService
  ) {}

  ngOnInit() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.mode = state.weatherDetailViewMode;
    });
  }

  get cloudiness(): number {
    return this.weatherReading.clouds;
  }

  get pressure(): number {
    return this.weatherReading.pressure;
  }

  get humidity(): number {
    return this.weatherReading.humidity;
  }

  get showDailyDetailReading(): boolean {
    return this.weatherMode.isDaily;
  }

  changeDailyDetailViewMode() {
    if (this.dailyDetailReadingModeIsTemperature) {
      this.updateStateDailyDetailViewMode(WeatherDailyDetailViewMode.FeelsLike);
    } else if (this.dailyDetailReadingModeIsFeelsLike) {
      this.updateStateDailyDetailViewMode(
        WeatherDailyDetailViewMode.Temperature
      );
    }
  }

  get dailyDetailReadingModeIsTemperature(): boolean {
    return this.mode === WeatherDailyDetailViewMode.Temperature;
  }

  private updateStateDailyDetailViewMode(mode: WeatherDailyDetailViewMode) {
    this.store.dispatch(
      actions.weatherDetailViewTypeUpdate({
        mode: mode,
      })
    );
  }

  private get dailyDetailReadingModeIsFeelsLike(): boolean {
    return this.mode === WeatherDailyDetailViewMode.FeelsLike;
  }

  get min(): number {
    if (this.showDailyDetailReading) {
      const reading = this.weatherReading.temp as ReadingDetailTemperature;

      return this.temperatureConverter.convertKelvinToCelsius(reading.min);
    }

    return -1;
  }

  get max(): number {
    if (this.showDailyDetailReading) {
      const reading = this.weatherReading.temp as ReadingDetailTemperature;

      return this.temperatureConverter.convertKelvinToCelsius(reading.max);
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

  get evening(): number {
    if (this.showDailyDetailReading) {
      const reading = this.weatherReading.temp as ReadingDetailTemperature;

      return this.temperatureConverter.convertKelvinToCelsius(reading.eve);
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

  get underlineTemperature(): boolean {
    return (
      this.showDailyDetailReading && this.dailyDetailReadingModeIsTemperature
    );
  }

  get temperature(): number {
    const weather = this.weatherReading;
    let temperature = this.temperatureBasedOnMode(weather);

    temperature = this.temperatureConverter.convertKelvinToCelsius(temperature);

    return temperature;
  }

  private temperatureBasedOnMode(weather: WeatherReading): number {
    if (this.weatherMode.isDaily) {
      return (weather.temp as ReadingDetailTemperature).day;
    }

    return weather.temp as number;
  }

  get feelsLike(): number {
    const weather = this.weatherReading;
    let feelsLike = this.feelsLikeBasedOnMode(weather);

    feelsLike = this.temperatureConverter.convertKelvinToCelsius(feelsLike);

    return feelsLike;
  }

  private feelsLikeBasedOnMode(weather: WeatherReading): number {
    if (this.weatherMode.isDaily) {
      return (weather.feels_like as ReadingDetailFeelsLike).day;
    }

    return weather.feels_like as number;
  }

  get underlineFeelsLike(): boolean {
    return (
      this.showDailyDetailReading && this.dailyDetailReadingModeIsFeelsLike
    );
  }

  get weatherIcon(): string {
    return this.weatherCondition.icon;
  }

  get weatherDescription(): string {
    return this.stringFormatter.capitalizeFirstLetter(
      this.weatherCondition.description
    );
  }

  private get weatherCondition(): WeatherCondition {
    return this.weatherReading.weather[0];
  }

  get windSpeed(): number {
    return this.weatherReading.wind_speed;
  }

  get windDirection(): number {
    return this.weatherReading.wind_deg;
  }

  get windGustIsPresent(): boolean {
    return this.weatherReading.wind_gust !== undefined;
  }

  get windGust(): number {
    return this.weatherReading.wind_gust as number;
  }

  private get weatherReading(): WeatherReading {
    let weather!: WeatherReading;

    if (this.weatherMode.isCurrent) {
      weather = this.weatherData.current;
    } else if (this.weatherMode.isHourly) {
      weather = this.weatherData.hourly[this.weatherStateIndexer.indexHourly];
    } else if (this.weatherMode.isDaily) {
      weather = this.weatherData.daily[this.weatherStateIndexer.indexDaily];
    }

    return weather;
  }
}
