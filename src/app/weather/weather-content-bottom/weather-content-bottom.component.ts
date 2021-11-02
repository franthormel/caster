import { Component, Input } from '@angular/core';

import { HourlyChance } from '../../models/weather/hourly-chance.models';
import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherReading } from '../../models/weather/weather-reading.models';

import { TemperatureConverterService } from '../temperature-converter.service';
import { StateManagerService } from '../../state-manager.service';

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
    return this.stateManager.isCurrent
      ? this.currentPrecipitation
      : this.dailyHourlyPrecipitation;
  }

  get precipitationTitle(): string {
    const title = 'Precipitation';

    if (this.stateManager.isCurrent) {
      return `${title} (Hour)`;
    }

    return title;
  }

  get precipitationTooltip(): string {
    if (this.stateManager.isCurrent) {
      return 'Precipitation volume';
    } else {
      return 'Probability of precipitation';
    }
  }

  get rain(): number {
    return this.stateManager.isDaily
      ? (this.weatherReading.rain as number)
      : (this.weatherReading.rain as HourlyChance)['1h'];
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
    return this.stateManager.isDaily
      ? (this.weatherReading.snow as number)
      : (this.weatherReading.snow as HourlyChance)['1h'];
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

    if (this.stateManager.isCurrent) {
      return `Current ${text}`;
    } else if (this.stateManager.isDaily) {
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
    const visibility = this.weatherReading.visibility;

    if (visibility && visibility > 1000) {
      let visibilityKm = visibility / 1000;
      visibilityKm = Math.trunc(visibilityKm);

      return `${visibilityKm} km`;
    } else if (visibility) {
      return `${visibility} m`;
    }

    return '';
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
    return !this.stateManager.isDaily;
  }

  private get weatherReading(): WeatherReading {
    let weather!: WeatherReading;

    if (this.stateManager.isCurrent) {
      weather = this.weatherData.current;
    } else if (this.stateManager.isHourly) {
      weather = this.weatherData.hourly[this.stateManager.indexHourly];
    } else if (this.stateManager.isDaily) {
      weather = this.weatherData.daily[this.stateManager.indexDaily];
    }

    return weather;
  }
}
