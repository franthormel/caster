import { Component, Input } from '@angular/core';

import { ReadingDailyFeelsLike } from '../../models/weather/reading-daily-feelslike.models';
import { ReadingDailyTemperature } from '../../models/weather/reading-daily-temperature.models';
import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherCondition } from '../../models/weather/weather-condition.models';
import { WeatherReading } from '../../models/weather/weather-reading.models';

import { StringFormatterService } from '../../shared/string-formatter.service';
import { TemperatureConverterService } from '../temperature-converter.service';
import { WeatherModeService } from '../weather-mode.service';
import { WeatherStateIndexerService } from '../weather-state-indexer.service';

@Component({
  selector: 'app-weather-content-main',
  templateUrl: './weather-content-main.component.html',
  styleUrls: ['./weather-content-main.component.css'],
})
export class WeatherContentMainComponent {
  @Input() weatherData!: WeatherData;

  constructor(
    private stringFormatter: StringFormatterService,
    private temperatureConverter: TemperatureConverterService,
    private weatherMode: WeatherModeService,
    private weatherStateIndexer: WeatherStateIndexerService
  ) {}

  get cloudiness(): number {
    return this.weatherReading.clouds;
  }

  get pressure(): number {
    return this.weatherReading.pressure;
  }

  get humidity(): number {
    return this.weatherReading.humidity;
  }

  get temperature(): number {
    const weather = this.weatherReading;
    let temperature = this.temperatureBasedOnMode(weather);

    temperature = this.temperatureConverter.convertKelvinToCelsius(temperature);

    return temperature;
  }

  private temperatureBasedOnMode(weather: WeatherReading): number {
    if (this.weatherMode.isDaily) {
      return (weather.temp as ReadingDailyTemperature).day;
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
      return (weather.feels_like as ReadingDailyFeelsLike).day;
    }

    return weather.feels_like as number;
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
