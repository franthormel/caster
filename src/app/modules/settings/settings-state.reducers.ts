import {
  SettingsDatasource,
  SettingsTemperature,
  SettingsTheme,
} from '../../models/settings.enums';

export interface SettingsState {
  datasource: SettingsDatasource;
  showDegreeSign: boolean;
  temperature: SettingsTemperature;
  theme: SettingsTheme;
}

export const initialSettingsState: SettingsState = {
  datasource: SettingsDatasource.File,
  showDegreeSign: true,
  temperature: SettingsTemperature.Celsius,
  theme: SettingsTheme.Light,
};
