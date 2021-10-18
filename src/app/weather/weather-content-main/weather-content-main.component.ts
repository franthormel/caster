import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../app-state.reducers';

import { WeatherData } from '../../models/weather/weather-data.models';
import { ReadingDailyTemperature } from '../../models/weather/reading-daily-temperature.models';
import { ReadingDailyFeelsLike } from '../../models/weather/reading-daily-feelslike.models';
import { WeatherReading } from 'src/app/models/weather/weather-reading.models';
import { TemperatureConverterService } from '../temperature-converter.service';
import { WeatherModeService } from '../weather-mode.service';
import { StringFormatterService } from 'src/app/shared/string-formatter.service';
import { WeatherCondition } from 'src/app/models/weather/weather-condition.models';

@Component({
  selector: 'app-weather-content-main',
  templateUrl: './weather-content-main.component.html',
  styleUrls: ['./weather-content-main.component.css'],
})
export class WeatherContentMainComponent implements OnInit {
  @Input() weatherData!: WeatherData;

  appState$!: Observable<AppState>;
  indexHourly!: number;
  indexDaily!: number;

  constructor(
    private stringFormatter: StringFormatterService,
    private temperatureConverter: TemperatureConverterService,
    private weatherMode: WeatherModeService,
    private store: Store<{ appState: AppState }>
  ) {}

  ngOnInit() {
    this.initIndexes();
  }

  // TODO Consider moving this to a service, since `weather-content-top` also uses this
  initIndexes() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.indexHourly = state.weatherIndexHourly;
      this.indexDaily = state.weatherIndexDaily;
    });
  }

  private get weatherReading(): WeatherReading {
    let weather!: WeatherReading;

    if (this.weatherMode.isCurrent) {
      weather = this.weatherData.current;
    } else if (this.weatherMode.isHourly) {
      weather = this.weatherData.hourly[this.indexHourly];
    } else if (this.weatherMode.isDaily) {
      weather = this.weatherData.daily[this.indexDaily];
    }

    return weather;
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

  private temperatureBasedOnMode(weather: WeatherReading): number {
    if (this.weatherMode.isDaily) {
      return (weather.temp as ReadingDailyTemperature).day;
    }

    return weather.temp as number;
  }

  get temperature(): number {
    const weather = this.weatherReading;
    let temperature = this.temperatureBasedOnMode(weather);

    temperature = this.temperatureConverter.convertKelvinToCelsius(temperature);

    return temperature;
  }

  private feelsLikeBasedOnMode(weather: WeatherReading): number {
    if (this.weatherMode.isDaily) {
      return (weather.feels_like as ReadingDailyFeelsLike).day;
    }

    return weather.feels_like as number;
  }

  get feelsLike(): number {
    const weather = this.weatherReading;
    let feelsLike = this.feelsLikeBasedOnMode(weather);

    feelsLike = this.temperatureConverter.convertKelvinToCelsius(feelsLike);

    return feelsLike;
  }

  private get weatherCondition(): WeatherCondition {
    return this.weatherReading.weather[0];
  }

  get weatherIcon(): string {
    return this.weatherCondition.icon;
  }

  get weatherDescription(): string {
    return this.stringFormatter.capitalizeFirstLetter(
      this.weatherCondition.description
    );
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
}
