import { Action, createReducer, on } from '@ngrx/store';

import {
  WeatherReadingMode,
  WeatherDailyDetailViewMode,
} from './models/weather/weather.enums';

import * as appStateActions from './app-state.actions';

export interface AppState {
  staticFile: number;
  weatherMode: WeatherReadingMode;
  weatherIndexDaily: number;
  weatherIndexHourly: number;
  weatherDetailViewMode: WeatherDailyDetailViewMode;
}

// Initial
export const appState: AppState = {
  staticFile: 1,
  weatherMode: WeatherReadingMode.Daily,
  weatherIndexDaily: 0,
  weatherIndexHourly: 0,
  weatherDetailViewMode: WeatherDailyDetailViewMode.Temperature,
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
  on(appStateActions.weatherModeUpdate, (state, { mode }) => ({
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
  })),

  // Weather daily detail
  on(appStateActions.weatherDetailViewTypeUpdate, (state, { mode }) => ({
    ...state,
    weatherDetailViewMode: mode,
  }))
);

export function appStateReducer(state: AppState | undefined, action: Action) {
  return _appStateReducer(state, action);
}
