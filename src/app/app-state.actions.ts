import { createAction, props } from '@ngrx/store';

import {
  WeatherReadingMode,
  WeatherDailyDetailViewMode,
} from './models/weather/weather.enums';

export const staticFileUpdate = createAction(
  '[Static Data] File Update',
  props<{ file: number }>()
);

export const weatherDetailViewTypeUpdate = createAction(
  '[Weather Detail View Type] Update',
  props<{ mode: WeatherDailyDetailViewMode }>()
);

export const weatherIndexDailyIncrement = createAction(
  '[Weather Index] Increment Daily'
);

export const weatherIndexDailyDecrement = createAction(
  '[Weather Index] Decrement Daily'
);

export const weatherIndexHourlyIncrement = createAction(
  '[Weather Index] Increment Hourly'
);

export const weatherIndexHourlyDecrement = createAction(
  '[Weather Index] Decrement Hourly'
);

export const weatherModeUpdate = createAction(
  '[Weather] Mode Update',
  props<{ mode: WeatherReadingMode }>()
);
