import { createAction, props } from '@ngrx/store';

import {
  SettingsDatasource,
  SettingsTemperature,
  SettingsTheme,
} from '../../models/settings.enums';

export const changeDatasource = createAction(
  '[Settings] Change Datasource',
  props<{ datasource: SettingsDatasource }>()
);

export const changeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: SettingsTheme }>()
);

export const changeTemperature = createAction(
  '[Settings] Change Temperature',
  props<{ temperature: SettingsTemperature }>()
);

export const toggleDegreeSign = createAction('[Settings] Toggle Degree Sign');
