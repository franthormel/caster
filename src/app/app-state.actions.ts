import { createAction, props } from '@ngrx/store';
import { WeatherReadingType } from './models/weather/weather.enums';

export const weatherModeUpdate = createAction(
  '[Weather] Mode Update',
  props<{ mode: WeatherReadingType }>()
);
export const staticFileUpdate = createAction(
  '[Static Data] File Update',
  props<{ file: number }>()
);
export const weatherIndexDailyUpdate = createAction(
  "[Weather Index] Daily's Update",
  props<{ index: number }>()
);
export const weatherIndexHourlyUpdate = createAction(
  "[Weather Index] Hourly's Update",
  props<{ index: number }>()
);
