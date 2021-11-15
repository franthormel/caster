import { createAction, props } from '@ngrx/store';

import {
  SettingsTemperature,
  SettingsSignificantFigures,
  SettingsBackgroundImage,
  SettingsTheme,
} from '../../models/settings.enums';

export const changeBackgroundImage = createAction(
  '[Settings] Change BackgroundImage',
  props<{ background: SettingsBackgroundImage }>()
);

export const changeSignificantFigures = createAction(
  '[Settings] Change Significant Figures',
  props<{ figures: SettingsSignificantFigures }>()
);

export const changeTemperature = createAction(
  '[Settings] Change Temperature',
  props<{ temperature: SettingsTemperature }>()
);

export const changeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: SettingsTheme }>()
);

export const toggleDegreeSign = createAction('[Settings] Toggle Degree Sign');
