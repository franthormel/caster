import { SettingsTemperature } from '../../models/settings.enums';

export interface SettingsState {
  showDegreeSign: boolean;
  temperature: SettingsTemperature;
}

export const initialSettingsState: SettingsState = {
  showDegreeSign: true,
  temperature: SettingsTemperature.Celsius,
};
