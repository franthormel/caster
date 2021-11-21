import { createAction, props } from '@ngrx/store';

import {
  WeatherReadingMode,
  WeatherDetailMode,
} from '../../models/weather/weather.enums';

export const changeDetailMode = createAction(
  '[Weather] Change Detail Mode',
  props<{ detailMode: WeatherDetailMode }>()
);

export const decrementIndexDaily = createAction(
  '[Weather] Decrement Index Daily'
);

export const incrementIndexDaily = createAction(
  '[Weather] Increment Index Daily'
);

export const decrementIndexHourly = createAction(
  '[Weather] Decrement Index Hourly'
);

export const incrementIndexHourly = createAction(
  '[Weather] Increment Index Hourly'
);

export const changeReadingMode = createAction(
  '[Weather] Change Reading Mode',
  props<{ readingMode: WeatherReadingMode }>()
);
