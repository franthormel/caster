import { Component } from '@angular/core';

import {
  SettingsTemperature,
  SettingsSignificantFigures,
  SettingsBackgroundImage,
  SettingsTheme,
} from '../../../models/settings.enums';
import { SettingsConfig } from '../../../models/settings.models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  // TODO Move to service
  config: SettingsConfig = {
    temperature: SettingsTemperature.Celsius,
    significantFigures: 0,
    backgroundImage: SettingsBackgroundImage.Generic,
    theme: SettingsTheme.Light,
    showDegreeSign: true,
  };

  constructor() {}

  changeTemperature(value: SettingsTemperature) {
    // TODO
  }
  changeSignificantFigures(value: SettingsSignificantFigures) {
    // TODO
  }
  changeBackgroundImage(value: SettingsBackgroundImage) {
    // TODO
  }
  changeTheme(value: SettingsTheme) {
    // TODO
  }

  get temperatureOptions(): SettingsTemperature[] {
    return [
      SettingsTemperature.Celsius,
      SettingsTemperature.Fahrenheit,
      SettingsTemperature.Kelvin,
    ];
  }

  get significantFigureOptions(): SettingsSignificantFigures[] {
    return [0, 1, 2];
  }

  get backgroundImageOptions(): SettingsBackgroundImage[] {
    return [
      SettingsBackgroundImage.Generic,
      SettingsBackgroundImage.WeatherRelated,
    ];
  }

  get themeOptions(): SettingsTheme[] {
    return [
      SettingsTheme.Light,
      SettingsTheme.Dark,
      SettingsTheme.System,
      SettingsTheme.TimeRelated,
    ];
  }
}
