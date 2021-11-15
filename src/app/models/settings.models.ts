import {
  SettingsTemperature,
  SettingsSignificantFigures,
  SettingsBackgroundImage,
  SettingsTheme,
} from './settings.enums';

export interface SettingsConfig {
  temperature: SettingsTemperature;
  significantFigures: SettingsSignificantFigures;
  backgroundImage: SettingsBackgroundImage;
  theme: SettingsTheme;
  showDegreeSign: boolean;
}
