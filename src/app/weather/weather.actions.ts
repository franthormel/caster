import { createAction, props } from '@ngrx/store';
import { WeatherReadingType } from '../models/weather/weather.enums';

export const weatherChangeMode = createAction(
  '[Weather] Change Mode',
  props<{ mode: WeatherReadingType }>()
);
