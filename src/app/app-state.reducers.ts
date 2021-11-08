import { Action, createReducer, on } from '@ngrx/store';

import { staticFileUpdate } from './app-state.actions';
import * as weather from './modules/weather/weather-state.actions';
import * as airPollution from './modules/air-pollution/air-pollution-state.actions';

import {
  initialWeatherState,
  WeatherState,
} from './modules/weather/weather-state.reducers';

import {
  initialAirPollutionState,
  AirPollutionState,
} from './modules/air-pollution/air-pollution-state.reducers';

export interface AppState {
  staticFile: number;
  weatherState: WeatherState;
  airPollutionState: AirPollutionState;
}

export const initialAppState: AppState = {
  staticFile: 1,
  weatherState: initialWeatherState,
  airPollutionState: initialAirPollutionState,
};

const _appStateReducer = createReducer(
  initialAppState,

  on(staticFileUpdate, (state, { file }) => ({
    ...state,
    staticFile: file,
  })),

  on(airPollution.indexDecrement, (state) => ({
    ...state,
    airPollutionState: {
      index: state.airPollutionState.index - 1,
    },
  })),

  on(airPollution.indexIncrement, (state) => ({
    ...state,
    airPollutionState: {
      index: state.airPollutionState.index + 1,
    },
  })),

  on(weather.detailModeUpdate, (state, { mode: dailyDetailViewMode }) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      detailMode: dailyDetailViewMode,
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
      readingMode: mode,
    },
  }))
);

export function appStateReducer(state: AppState | undefined, action: Action) {
  return _appStateReducer(state, action);
}
