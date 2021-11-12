import {
  SettingsTemperature,
  SettingsSignificantFigures,
  SettingsBackgroundImage,
  SettingsTheme,
} from './settings.enums';

interface RadioOption {
  name: string;
}

export interface RadioOptionTemperature extends RadioOption {
  value: SettingsTemperature;
}

export interface RadioOptionSignificantFigures extends RadioOption {
  value: SettingsSignificantFigures;
}

export interface RadioOptionBackgroundImage extends RadioOption {
  value: SettingsBackgroundImage;
}

export interface RadioOptionTheme extends RadioOption {
  value: SettingsTheme;
}

export interface SettingsConfig {
  temperature: SettingsTemperature;
  significantFigures: SettingsSignificantFigures;
  backgroundImage: SettingsBackgroundImage;
  theme: SettingsTheme;
}
