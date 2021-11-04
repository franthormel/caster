import { createAction, props } from '@ngrx/store';

import {
  WeatherReadingMode,
  WeatherDetailMode,
} from '../models/weather/weather.enums';

export const detailViewTypeUpdate = createAction(
  '[Weather] Detail View Type Update',
  props<{ dailyDetailViewMode: WeatherDetailMode }>()
);

export const indexDailyIncrement = createAction(
  '[Weather] Index Daily Increment'
);

export const indexDailyDecrement = createAction(
  '[Weather] Index Daily Decrement'
);

export const indexHourlyIncrement = createAction(
  '[Weather] Index Hourly Increment'
);

export const indexHourlyDecrement = createAction(
  '[Weather] Index Hourly Decrement'
);

export const readingModeUpdate = createAction(
  '[Weather] Reading Mode Update',
  props<{ mode: WeatherReadingMode }>()
);
