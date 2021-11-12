import { Component } from '@angular/core';

import {
  SettingsTemperature,
  SettingsSignificantFigures,
  SettingsBackgroundImage,
  SettingsTheme,
} from '../../../models/settings.enums';
import {
  RadioOptionTemperature,
  RadioOptionSignificantFigures,
  RadioOptionBackgroundImage,
  RadioOptionTheme,
  SettingsConfig,
} from '../../../models/settings.models';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  // TODO Move to service
  config: SettingsConfig = {
    significantFigures: SettingsSignificantFigures.None,
    backgroundImage: SettingsBackgroundImage.Generic,
    temperature: SettingsTemperature.Celsius,
    theme: SettingsTheme.Light,
  };
  showDegreeSign = true;

  get temperatureOptions(): RadioOptionTemperature[] {
    return [
      { name: 'Celsius', value: SettingsTemperature.Celsius },
      { name: 'Fahrenheit', value: SettingsTemperature.Fahrenheit },
      { name: 'Kelvin', value: SettingsTemperature.Kelvin },
    ];
  }

  get significantFigureOptions(): RadioOptionSignificantFigures[] {
    return [
      { name: '0', value: SettingsSignificantFigures.None },
      { name: '1', value: SettingsSignificantFigures.Single },
      { name: '2', value: SettingsSignificantFigures.Double },
    ];
  }

  get backgroundImageOptions(): RadioOptionBackgroundImage[] {
    return [
      {
        name: 'Weather related',
        value: SettingsBackgroundImage.WeatherRelated,
      },
      { name: 'Generic', value: SettingsBackgroundImage.Generic },
    ];
  }

  get themeOptions(): RadioOptionTheme[] {
    return [
      { name: 'Time related', value: SettingsTheme.TimeRelated },
      { name: 'System', value: SettingsTheme.System },
      { name: 'Light', value: SettingsTheme.Light },
      { name: 'Dark', value: SettingsTheme.Dark },
    ];
  }
}
