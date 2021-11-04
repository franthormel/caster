import { Action, createReducer, on } from '@ngrx/store';

import { staticFileUpdate } from './app-state.actions';
import * as weather from './weather/weather-state.actions';

import {
  initialWeatherState,
  WeatherState,
} from './weather/weather-state.reducers';

export interface AppState {
  staticFile: number;
  weatherState: WeatherState;
}

export const initialAppState: AppState = {
  staticFile: 1,
  weatherState: initialWeatherState,
};

const _appStateReducer = createReducer(
  initialAppState,

  on(staticFileUpdate, (state, { file }) => ({
    ...state,
    staticFile: file,
  })),

  on(weather.detailViewTypeUpdate, (state, { dailyDetailViewMode }) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      dailyDetailViewMode: dailyDetailViewMode,
    },
  })),

  on(weather.indexDailyIncrement, (state) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      indexDaily: state.weatherState.indexDaily + 1,
    },
  })),

  on(weather.indexDailyDecrement, (state) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      indexDaily: state.weatherState.indexDaily - 1,
    },
  })),

  on(weather.indexHourlyIncrement, (state) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      indexHourly: state.weatherState.indexHourly + 1,
    },
  })),

  on(weather.indexHourlyDecrement, (state) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      indexHourly: state.weatherState.indexHourly - 1,
    },
  })),

  on(weather.readingModeUpdate, (state, { mode }) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      mode: mode,
    },
  }))
);

export function appStateReducer(state: AppState | undefined, action: Action) {
  return _appStateReducer(state, action);
}
