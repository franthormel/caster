import { createAction, props } from '@ngrx/store';

import { WeatherReadingType } from './models/weather/weather.enums';

export const updateWeatherMode = createAction(
  '[Weather] Mode Update',
  props<{ mode: WeatherReadingType }>()
);

export const staticFileUpdate = createAction(
  '[Static Data] File Update',
  props<{ file: number }>()
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
