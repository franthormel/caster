import { Injectable } from '@angular/core';

import { SettingsTheme } from '../../../models/settings.enums';
import { StateManagerService } from './state-manager.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeManagerService {
  constructor(private stateManager: StateManagerService) {}

  get anchorLink(): { [klass: string]: boolean } {
    return {
      'a-link-dark': this.themeIsDark,
      'a-link-light': this.themeIsLight,
    };
  }

  get theme(): { [klass: string]: boolean } {
    return {
      'bg-dark theme-dark': this.themeIsDark,
      'bg-light': this.themeIsLight,
    };
  }

  get transparentBackground(): { [klass: string]: boolean } {
    return {
      'transparent-bg-dark': this.themeIsDark,
      'transparent-bg-light': this.themeIsLight,
    };
  }

  private get themeIsDark(): boolean {
    return this.stateManager.settingsThemeIs(SettingsTheme.Dark);
  }

  private get themeIsLight(): boolean {
    return this.stateManager.settingsThemeIs(SettingsTheme.Light);
  }
}
