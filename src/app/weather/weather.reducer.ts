import { Action, createReducer, on } from '@ngrx/store';
import { weatherChangeMode } from './weather.actions';
import { WeatherReadingType } from '../models/weather/weather.enums';

export const weatherKey = 'weather';

export interface WeatherState {
  mode: WeatherReadingType;
}

export const weatherState: WeatherState = {
  mode: WeatherReadingType.Current,
};

const _weatherReducer = createReducer(
  weatherState,
  on(weatherChangeMode, (state, { mode }) => ({
    mode: mode,
  }))
);

export function weatherReducer(
  state: WeatherState | undefined,
  action: Action
) {
  return _weatherReducer(state, action);
}
