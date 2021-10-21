import { Action, createReducer, on } from '@ngrx/store';

import { WeatherReadingType } from './models/weather/weather.enums';

import * as appStateActions from './app-state.actions';

/**
 * * `file` Name of file to be used for static data presentation.
 * * `mode` Current mode of weather display (index, hourly, daily). See `WeatherReadingType`
 * * `weatherIndexHourly` Current index of hourly weather data. Helps user in picking up where they left off.
 * * `weatherIndexDaily` Current index of daily weather data.  Helps user in picking up where they left off.
 */
export interface AppState {
  staticFile: number;
  weatherMode: WeatherReadingType;
  weatherIndexDaily: number;
  weatherIndexHourly: number;
}

// Initial
export const appState: AppState = {
  staticFile: 1,
  weatherMode: WeatherReadingType.Current,
  weatherIndexDaily: 0,
  weatherIndexHourly: 0,
};

// Reducer definitions
const _appStateReducer = createReducer(
  appState,

  // Static files
  on(appStateActions.staticFileUpdate, (state, { file }) => ({
    ...state,
    staticFile: file,
  })),

  // Weather mode
  on(appStateActions.updateWeatherMode, (state, { mode }) => ({
    ...state,
    weatherMode: mode,
  })),

  // Weather index daily
  on(appStateActions.weatherIndexDailyIncrement, (state) => ({
    ...state,
    weatherIndexDaily: state.weatherIndexDaily + 1,
  })),
  on(appStateActions.weatherIndexDailyDecrement, (state) => ({
    ...state,
    weatherIndexDaily: state.weatherIndexDaily - 1,
  })),

  // Weather index hourly
  on(appStateActions.weatherIndexHourlyIncrement, (state) => ({
    ...state,
    weatherIndexHourly: state.weatherIndexHourly + 1,
  })),
  on(appStateActions.weatherIndexHourlyDecrement, (state) => ({
    ...state,
    weatherIndexHourly: state.weatherIndexHourly - 1,
  }))
);

export function appStateReducer(state: AppState | undefined, action: Action) {
  return _appStateReducer(state, action);
}
