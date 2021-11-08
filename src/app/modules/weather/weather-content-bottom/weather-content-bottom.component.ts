import { Component, Input } from '@angular/core';

import { WeatherHourlyChance } from '../../../models/weather/weather-hourly-chance.models';
import { WeatherData } from '../../../models/weather/weather-data.models';
import { WeatherReading } from '../../../models/weather/weather-reading.models';

import { TemperatureConverterService } from '../temperature-converter.service';
import { StateManagerService } from '../../../state-manager.service';

@Component({
  selector: 'app-weather-content-bottom',
  templateUrl: './weather-content-bottom.component.html',
  styleUrls: ['./weather-content-bottom.component.scss'],
})
export class WeatherContentBottomComponent {
  @Input() weatherData!: WeatherData;

  constructor(
    private temperatureConverter: TemperatureConverterService,
    private stateManager: StateManagerService
  ) {}

  get dewPoint(): number {
    return this.temperatureConverter.convertKelvinToCelsius(
      this.weatherReading.dew_point
    );
  }

  get precipitation(): string {
    return this.stateManager.readingModeIsCurrent
      ? this.currentPrecipitation
      : this.dailyHourlyPrecipitation;
  }

  get precipitationTitle(): string {
    const title = 'Precipitation';

    if (this.stateManager.readingModeIsCurrent) {
      return `${title} (Hour)`;
    }

    return title;
  }

  get precipitationTooltip(): string {
    if (this.stateManager.readingModeIsCurrent) {
      return 'Precipitation volume';
    } else {
      return 'Probability of precipitation';
    }
  }

  get rain(): number | undefined {
    return this.stateManager.readingModeIsDaily
      ? (this.weatherReading.rain as number)
      : (this.weatherReading.rain as WeatherHourlyChance)['1h'];
  }

  get rainIsPresent(): boolean {
    return this.weatherReading.rain !== undefined;
  }

  get rainTooltip(): string {
    const text = 'Rain volume';

    if (this.isNotDaily) {
      return `${text} for the last hour`;
    }

    return text;
  }

  get snow(): number | undefined {
    return this.stateManager.readingModeIsDaily
      ? (this.weatherReading.snow as number)
      : (this.weatherReading.snow as WeatherHourlyChance)['1h'];
  }

  get snowIsPresent(): boolean {
    return this.weatherReading.snow !== undefined;
  }

  get snowTooltip(): string {
    const text = 'Snow volume';

    if (this.isNotDaily) {
      return `${text} for the last hour`;
    }

    return text;
  }

  get uvi(): number {
    return this.weatherReading.uvi;
  }

  get uviTooltip(): string {
    const text = 'UV Index';

    if (this.stateManager.readingModeIsCurrent) {
      return `Current ${text}`;
    } else if (this.stateManager.readingModeIsDaily) {
      return `The maximum value of ${text} for the day`;
    } else {
      return text;
    }
  }

  get visibilityIsPresent(): boolean {
    return this.weatherReading.visibility !== undefined;
  }

  /**
   * This isn't available for daily forecasts
   */
  get visibility(): string {
    let value = '';
    const visibility = this.weatherReading.visibility;

    if (visibility && visibility > 1000) {
      let visibilityKm = visibility / 1000;
      visibilityKm = Math.trunc(visibilityKm);

      value = `${visibilityKm} km`;
    } else if (visibility) {
      value = `${visibility} m`;
    }

    return value;
  }

  private get currentPrecipitation(): string {
    let precipitationVolume: string | number = 0;

    if (this.weatherData.minutely !== undefined) {
      let total = 0;
      const length = this.weatherData.minutely.length;

      for (const minute of this.weatherData.minutely) {
        total += minute.precipitation;
      }

      precipitationVolume = total / length;
      precipitationVolume = precipitationVolume.toFixed(2);
    }

    return `${precipitationVolume} mm`;
  }

  private get dailyHourlyPrecipitation(): string {
    const precipitationChance = this.weatherReading.pop
      ? Math.trunc(this.weatherReading.pop * 100)
      : 0;

    return `${precipitationChance}%`;
  }

  private get isNotDaily(): boolean {
    return !this.stateManager.readingModeIsDaily;
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
}