import {
  SettingsTemperature,
  SettingsBackgroundImage,
  SettingsTheme,
} from '../../models/settings.enums';

export interface SettingsState {
  backgroundImage: SettingsBackgroundImage;
  showDegreeSign: boolean;
  temperature: SettingsTemperature;
  theme: SettingsTheme;
}

export const initialSettingsState: SettingsState = {
  backgroundImage: SettingsBackgroundImage.Generic,
  showDegreeSign: true,
  temperature: SettingsTemperature.Celsius,
  theme: SettingsTheme.Light,
};
