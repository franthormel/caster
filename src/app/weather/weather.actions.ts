import { createAction, props } from '@ngrx/store';
import { WeatherReadingType } from '../models/weather/weather.enums';

export const weatherModeChange = createAction(
  '[Weather] Mode Update',
  props<{ mode: WeatherReadingType }>()
);
