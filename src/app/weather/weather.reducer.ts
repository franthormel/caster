import { Action, createReducer, on } from '@ngrx/store';
import { weatherModeChange } from './weather.actions';
import { WeatherReadingType } from '../models/weather/weather.enums';

export const weatherModeKey = 'weatherMode';

export interface WeatherModeState {
  mode: WeatherReadingType;
}

export const weatherModeState: WeatherModeState = {
  mode: WeatherReadingType.Current,
};

const _weatherModeReducer = createReducer(
  weatherModeState,
  on(weatherModeChange, (state, { mode }) => ({
    mode: mode,
  }))
);

export function weatherModeReducer(
  state: WeatherModeState | undefined,
  action: Action
) {
  return _weatherModeReducer(state, action);
}
