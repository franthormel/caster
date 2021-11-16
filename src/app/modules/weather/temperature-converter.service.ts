import { Injectable } from '@angular/core';

import { SettingsTemperature } from '../../models/settings.enums';
import { StateManagerService } from '../shared/services/state-manager.service';

@Injectable({
  providedIn: 'root',
})
export class TemperatureConverterService {
  constructor(private stateManager: StateManagerService) {}

  convertTemperature(kelvin: number): number {
    // TODO: Separate converting reading to corresponding type (kfc) then roudning it to a speicfic precision according
    // to settings (0,1,2) Number.prototype.toPrecision() by using 2 different priv methods 
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
