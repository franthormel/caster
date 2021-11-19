import { Component } from '@angular/core';

import { SettingsTemperature } from '../../../models/settings.enums';

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

  changeTemperature(value: SettingsTemperature) {
    this.stateManager.changeSettingsTemperature(value);
  }

  toggleDegreeSign() {
    this.stateManager.settingsToggleDegreeSign();
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

  get creditsImages(): ImageCredits[] {
    return IMAGE_CREDITS_LIGHT.concat(IMAGE_CREDITS_DARK);
  }
  get creditsSoftware(): SoftwareCredits[] {
    return SOFTWARE_CREDITS;
  }
}
