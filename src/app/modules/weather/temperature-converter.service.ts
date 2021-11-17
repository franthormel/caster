import { Injectable } from '@angular/core';

import { SettingsTemperature } from '../../models/settings.enums';
import { StateManagerService } from '../shared/services/state-manager.service';

@Injectable({
  providedIn: 'root',
})
export class TemperatureConverterService {
  constructor(private stateManager: StateManagerService) {}

  // TODO: When number of significant figures is implemented using Number.toFixed(precision)

  convertTemperature(kelvin: number): number {
    const settings = this.stateManager.settingsTemperature;
    let value = kelvin;

    switch (settings) {
      case SettingsTemperature.Celsius:
        value = this.convertKelvinToCelsius(kelvin);
        break;
      case SettingsTemperature.Fahrenheit:
        value = this.convertKelvinToFahrenheit(kelvin);
        break;
      case SettingsTemperature.Kelvin:
        value;
        break;
      default:
        value;
    }

    value = Math.round(value);

    return value;
  }

  private convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15;
  }

  private convertKelvinToFahrenheit(kelvin: number): number {
    return ((kelvin - 273.15) * 9) / 5 + 32;
  }
}
