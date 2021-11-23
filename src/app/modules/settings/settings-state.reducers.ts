import {
  SettingsDatasource,
  SettingsTemperature,
} from '../../models/settings.enums';

export interface SettingsState {
  datasource: SettingsDatasource;
  showDegreeSign: boolean;
  temperature: SettingsTemperature;
}

export const initialSettingsState: SettingsState = {
  datasource: SettingsDatasource.File,
  showDegreeSign: true,
  temperature: SettingsTemperature.Celsius,
};
