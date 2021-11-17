import { Component } from '@angular/core';

import {
  SettingsTemperature,
  SettingsSignificantFigures,
  SettingsBackgroundImage,
  SettingsTheme,
} from '../../../models/settings.enums';

import {
  IMAGE_CREDITS_LIGHT,
  IMAGE_CREDITS_DARK,
} from '../../../data/images-credits.data';
import { SOFTWARE_CREDITS } from '../../../data/software-credits.data';
import { ImageCredits, SoftwareCredits } from '../../../models/credits.models';

import { StateManagerService } from '../../shared/services/state-manager.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private stateManager: StateManagerService) {}

  changeBackgroundImage(value: SettingsBackgroundImage) {
    this.stateManager.changeSettingsBackgroundImage(value);
  }

  changeSignificantFigures(value: SettingsSignificantFigures) {
    this.stateManager.changeSettingsSignificantFigures(value);
  }

  changeTemperature(value: SettingsTemperature) {
    this.stateManager.changeSettingsTemperature(value);
  }

  changeTheme(value: SettingsTheme) {
    this.stateManager.changeSettingsTheme(value);
  }

  toggleDegreeSign() {
    this.stateManager.settingsToggleDegreeSign();
  }

  get backgroundImage(): SettingsBackgroundImage {
    return this.stateManager.settingsBackgroundImage;
  }

  get backgroundImageOptions(): SettingsBackgroundImage[] {
    return [
      SettingsBackgroundImage.Generic,
      SettingsBackgroundImage.WeatherRelated,
    ];
  }

  get degreeSign(): boolean {
    return this.stateManager.settingsDegreeSign;
  }

  get degreeSignTooltip(): string {
    const prepend = this.degreeSign ? 'Hide' : 'Show';
    const value = `${prepend} degree sign for temperature readings and wind direction`;

    return value;
  }

  get significantFigures(): SettingsSignificantFigures {
    return this.stateManager.settingsSignificantFigures;
  }

  get significantFigureOptions(): SettingsSignificantFigures[] {
    return [0, 1, 2];
  }

  get temperature(): SettingsTemperature {
    return this.stateManager.settingsTemperature;
  }

  get temperatureOptions(): SettingsTemperature[] {
    return [
      SettingsTemperature.Celsius,
      SettingsTemperature.Fahrenheit,
      SettingsTemperature.Kelvin,
    ];
  }

  get theme(): SettingsTheme {
    return this.stateManager.settingsTheme;
  }

  get themeOptions(): SettingsTheme[] {
    return [
      SettingsTheme.Light,
      SettingsTheme.Dark,
      SettingsTheme.System,
      SettingsTheme.TimeRelated,
    ];
  }

  get creditsImages(): ImageCredits[] {
    return IMAGE_CREDITS_LIGHT.concat(IMAGE_CREDITS_DARK);
  }
  get creditsSoftware(): SoftwareCredits[] {
    return SOFTWARE_CREDITS;
  }
}
