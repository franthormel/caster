import { createAction, props } from '@ngrx/store';

import {
  WeatherReadingMode,
  WeatherDailyDetailViewMode,
} from '../models/weather/weather.enums';

export const detailViewTypeUpdate = createAction(
  '[Weather] Detail View Type Update',
  props<{ dailyDetailViewMode: WeatherDailyDetailViewMode }>()
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

export const modeUpdate = createAction(
  '[Weather] Mode Update',
  props<{ mode: WeatherReadingMode }>()
);
