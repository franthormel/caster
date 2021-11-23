import { createAction, props } from '@ngrx/store';

import {
  SettingsDatasource,
  SettingsTemperature,
} from '../../models/settings.enums';

export const changeTemperature = createAction(
  '[Settings] Change Temperature',
  props<{ temperature: SettingsTemperature }>()
);

export const toggleDegreeSign = createAction('[Settings] Toggle Degree Sign');

export const changeDatasource = createAction(
  '[Settings] Change Datasource',
  props<{ datasource: SettingsDatasource }>()
);
