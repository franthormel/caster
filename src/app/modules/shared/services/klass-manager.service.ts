import { Injectable } from '@angular/core';

import { SettingsTheme } from '../../../models/settings.enums';
import { StateManagerService } from './state-manager.service';

@Injectable({
  providedIn: 'root',
})
export class KlassManagerService {
  constructor(private stateManager: StateManagerService) {}

  get imageBackground(): { [klass: string]: boolean } {
    // ALERT Make sure that the klasses to be the same in the SCSS
    return {
      'bg-dark': this.stateManager.settingsThemeIs(SettingsTheme.Dark),
      'bg-light': this.stateManager.settingsThemeIs(SettingsTheme.Light),
    };
  }

  get transparentBackground(): { [klass: string]: boolean } {
    return {
      'transparent-bg-dark': this.stateManager.settingsThemeIs(
        SettingsTheme.Dark
      ),
      'transparent-bg-light': this.stateManager.settingsThemeIs(
        SettingsTheme.Light
      ),
    };
  }
}
