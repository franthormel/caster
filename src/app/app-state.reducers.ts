import { Action, createReducer, on } from '@ngrx/store';

import { WeatherReadingType } from './models/weather/weather.enums';

import * as appStateActions from './app-state.actions';

/**
 * * `file` Name of file to be used for static data presentation.
 * * `mode` Current mode of weather display (current, hourly, daily). See `WeatherReadingType`
 * * `weatherIndexHourly` Current index of hourly weather data. Helps user in picking up where they left off.
 * * `weatherIndexDaily` Current index of daily weather data.  Helps user in picking up where they left off.
 */
export interface AppState {
  staticFile: number;
  weatherMode: WeatherReadingType;
  weatherIndexDaily: number;
  weatherIndexHourly: number;
}

export const appState: AppState = {
  staticFile: 1,
  weatherMode: WeatherReadingType.Current,
  weatherIndexDaily: 0,
  weatherIndexHourly: 0,
};

const _appStateReducer = createReducer(
  appState,
  on(appStateActions.staticFileUpdate, (state, { file }) => ({
    ...state,
    staticFile: file,
  })),
  on(appStateActions.weatherModeUpdate, (state, { mode }) => ({
    ...state,
    weatherMode: mode,
  })),

  on(appStateActions.weatherIndexDailyUpdate, (state, { index }) => ({
    ...state,
    weatherIndexDaily: index,
  })),
  on(appStateActions.weatherIndexHourlyUpdate, (state, { index }) => ({
    ...state,
    weatherIndexHourly: index,
  }))
);

export function appStateReducer(state: AppState | undefined, action: Action) {
  return _appStateReducer(state, action);
}
