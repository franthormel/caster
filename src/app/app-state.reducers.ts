import { Action, createReducer, on } from '@ngrx/store';

import { environment } from '../environments/environment';

import { WeatherReadingType } from './models/weather/weather.enums';

import * as appStateActions from './app-state.actions';

/**
 * * `file` Name of file to be used for static data presentation.
 * * `mode` Current mode of weather display (index, hourly, daily). See `WeatherReadingType`
 * * `weatherIndexHourly` Current index of hourly weather data. Helps user in picking up where they left off.
 * * `weatherIndexDaily` Current index of daily weather data.  Helps user in picking up where they left off.
 */
// Shape
export interface AppState {
  staticFile: number;
  weatherMode: WeatherReadingType;
  weatherIndexDaily: number;
  weatherIndexHourly: number;
}

// Initial
export const appState: AppState = {
  staticFile: 1,
  weatherMode: WeatherReadingType.Daily,
  weatherIndexDaily: 0,
  weatherIndexHourly: 0,
};

// Reducer definitions
const _appStateReducer = createReducer(
  appState,
  on(
    appStateActions.staticFileUpdate,
    (state, { file }): AppState => ({
      ...state,
      staticFile: file,
    })
  ),
  on(
    appStateActions.weatherModeUpdate,
    (state, { mode }): AppState => ({
      ...state,
      weatherMode: mode,
    })
  ),

  on(
    appStateActions.weatherIndexDailyUpdate,
    (state, { index }): AppState => ({
      ...state,
      weatherIndexDaily: index,
    })
  ),
  on(
    appStateActions.weatherIndexHourlyIncrement,
    (state): AppState => ({
      ...state,
      weatherIndexHourly: state.weatherIndexHourly + 1,
    })
  ),
  on(
    appStateActions.weatherIndexHourlyDecrement,
    (state): AppState => ({
      ...state,
      weatherIndexHourly: state.weatherIndexHourly - 1,
    })
  )
);

export function appStateReducer(state: AppState | undefined, action: Action) {
  return _appStateReducer(state, action);
}
