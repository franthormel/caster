import { Component, Input } from '@angular/core';

import { WeatherData } from 'src/app/models/weather/weather-data.models';

import { HourlyChance } from '../../models/weather/hourly-chance.models';
import { WeatherReading } from '../../models/weather/weather-reading.models';

import { TemperatureConverterService } from '../temperature-converter.service';
import { WeatherModeService } from '../weather-mode.service';
import { WeatherStateIndexerService } from '../weather-state-indexer.service';

@Component({
  selector: 'app-weather-content-bottom',
  templateUrl: './weather-content-bottom.component.html',
  styleUrls: ['./weather-content-bottom.component.css'],
})
export class WeatherContentBottomComponent {
  @Input() weatherData!: WeatherData;

  constructor(
    private temperatureConverter: TemperatureConverterService,
    private weatherStateIndexer: WeatherStateIndexerService,
    private weatherMode: WeatherModeService
  ) {}

  // TODO: Duplicated from `weather-content-main`
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

  get snow(): number {
    return this.weatherMode.isDaily
      ? (this.weatherReading.snow as number)
      : (this.weatherReading.snow as HourlyChance)['1h'];
  }

  get snowIsPresent(): boolean {
    return this.weatherReading.snow !== undefined;
  }

  get rain(): number {
    return this.weatherMode.isDaily
      ? (this.weatherReading.rain as number)
      : (this.weatherReading.rain as HourlyChance)['1h'];
  }

  get rainIsPresent(): boolean {
    return this.weatherReading.rain !== undefined;
  }

  get precipitationTitle(): string {
    const title = 'Precipitation';

    if (this.weatherMode.isCurrent) {
      return `${title} (Hour)`;
    }

    return title;
  }

  /**
   * Precipitation is measured as a probability for the daily and hourly
   * forecasts, while current weather uses volume.
   */
  get precipitation(): string {
    return this.weatherMode.isCurrent
      ? this.currentPrecipitation
      : this.dailyOrHourlyPrecipitation;
  }

  private get dailyOrHourlyPrecipitation(): string {
    const precipitationChance = this.weatherReading.pop
      ? Math.trunc(this.weatherReading.pop * 100)
      : 0;

    return `${precipitationChance}%`;
  }

  private get currentPrecipitation(): string {
    let precipitationVolume: string | number = 0;

    if (this.weatherData.minutely !== undefined) {
      let total = 0;
      const length = this.weatherData.minutely.length;

      for (const minute of this.weatherData.minutely) {
        total += minute.precipitation;
      }

      precipitationVolume = (total / length).toFixed(2);
    }

    return `${precipitationVolume} mm`;
  }

  get dewPoint(): number {
    return this.temperatureConverter.convertKelvinToCelsius(
      this.weatherReading.dew_point
    );
  }

  get uvi(): number {
    return this.weatherReading.uvi;
  }

  get visibilityIsPresent(): boolean {
    return this.weatherReading.visibility !== undefined;
  }

  /**
   * This isn't available for daily forecasts
   */
  get visibility(): string {
    const visibility = this.weatherReading.visibility;

    if (visibility && visibility > 1000) {
      return `${Math.trunc(visibility / 1000)} km`;
    } else {
      return `${visibility} m`;
    }
  }
}
