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

// NOTE when changing base theme, also change the initial value of the state
export const initialSettingsState: SettingsState = {
  datasource: SettingsDatasource.File,
  showDegreeSign: true,
  temperature: SettingsTemperature.Celsius,
  theme: SettingsTheme.Light,
};
