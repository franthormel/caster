import {
  SettingsTemperature,
  SettingsSignificantFigures,
  SettingsBackgroundImage,
  SettingsTheme,
} from '../../models/settings.enums';

export interface SettingsState {
  backgroundImage: SettingsBackgroundImage;
  significantFigures: SettingsSignificantFigures; // TODO: Apply
  showDegreeSign: boolean; // TODO: Apply
  temperature: SettingsTemperature;
  theme: SettingsTheme;
}

export const initialSettingsState: SettingsState = {
  backgroundImage: SettingsBackgroundImage.Generic,
  significantFigures: 0,
  showDegreeSign: true,
  temperature: SettingsTemperature.Celsius,
  theme: SettingsTheme.Light,
};
