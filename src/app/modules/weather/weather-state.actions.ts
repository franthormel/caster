import { createAction, props } from '@ngrx/store';

import {
  WeatherReadingMode,
  WeatherDetailMode,
} from '../../models/weather/weather.enums';

export const detailModeUpdate = createAction(
  '[Weather] Detail Mode Update',
  props<{ mode: WeatherDetailMode }>()
);

export const indexDailyDecrement = createAction(
  '[Weather] Index Daily Decrement'
);

export const indexDailyIncrement = createAction(
  '[Weather] Index Daily Increment'
);

export const indexHourlyDecrement = createAction(
  '[Weather] Index Hourly Decrement'
);

export const indexHourlyIncrement = createAction(
  '[Weather] Index Hourly Increment'
);

export const readingModeUpdate = createAction(
  '[Weather] Reading Mode Update',
  props<{ mode: WeatherReadingMode }>()
);
