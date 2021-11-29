import { Component } from '@angular/core';

import {
  SettingsDatasource,
  SettingsTemperature,
  SettingsTheme,
} from '../../../models/settings.enums';

import { ImageCredits, SoftwareCredits } from '../../../models/credits.models';

import {
  IMAGE_CREDITS_LIGHT,
  IMAGE_CREDITS_DARK,
} from '../../../data/images-credits.data';
import { SOFTWARE_CREDITS } from '../../../data/software-credits.data';

import { StateManagerService } from '../../shared/services/state-manager.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private stateManager: StateManagerService) {}

  changeDatasource(value: SettingsDatasource) {
    this.stateManager.changeSettingsDatasource(value);
  }

  changeTemperature(value: SettingsTemperature) {
    this.stateManager.changeSettingsTemperature(value);
  }

  changeTheme(value: SettingsTheme) {
    this.stateManager.changeSettingsTheme(value);
  }

  toggleDegreeSign() {
    this.stateManager.toggleSettingsDegreeSign();
  }

  get creditsImages(): ImageCredits[] {
    return IMAGE_CREDITS_LIGHT.concat(IMAGE_CREDITS_DARK);
  }

  get creditsSoftware(): SoftwareCredits[] {
    return SOFTWARE_CREDITS;
  }

  get datasource(): SettingsDatasource {
    return this.stateManager.settingsDatasource;
  }

  get datasourceOptions(): SettingsDatasource[] {
    return [SettingsDatasource.File, SettingsDatasource.Online];
  }

  get degreeSign(): boolean {
    return this.stateManager.settingsDegreeSign;
  }

  get degreeSignTooltip(): string {
    const prepend = this.degreeSign ? 'Hide' : 'Show';
    const value = `${prepend} degree sign for temperature readings and wind direction`;

    return value;
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
    return [SettingsTheme.Light, SettingsTheme.Dark];
  }
}
