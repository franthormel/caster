import { Action, createReducer, on } from '@ngrx/store';

import * as airPollution from './modules/air-pollution/air-pollution-state.actions';
import * as locations from './modules/locations/locations-state.actions';
import * as settings from './modules/settings/settings-state.actions';
import * as weather from './modules/weather/weather-state.actions';

import {
  initialAirPollutionState,
  AirPollutionState,
} from './modules/air-pollution/air-pollution-state.reducers';

import {
  initialLocationsState,
  LocationsState,
} from './modules/locations/locations-state.reducers';

import {
  initialSettingsState,
  SettingsState,
} from './modules/settings/settings-state.reducers';

import {
  initialWeatherState,
  WeatherState,
} from './modules/weather/weather-state.reducers';

export interface AppState {
  airPollutionState: AirPollutionState;
  locationsState: LocationsState;
  settingsState: SettingsState;
  weatherState: WeatherState;
}

export const initialAppState: AppState = {
  airPollutionState: initialAirPollutionState,
  locationsState: initialLocationsState,
  settingsState: initialSettingsState,
  weatherState: initialWeatherState,
};

const _appStateReducer = createReducer(
  initialAppState,

  on(airPollution.decrementIndex, (state) => ({
    ...state,
    airPollutionState: {
      index: state.airPollutionState.index - 1,
    },
  })),

  on(airPollution.incrementIndex, (state) => ({
    ...state,
    airPollutionState: {
      index: state.airPollutionState.index + 1,
    },
  })),

  on(locations.changeLocationsFile, (state, { file }) => ({
    ...state,
    locationsState: {
      index: file,
    },
  })),

  on(settings.changeTemperature, (state, { temperature }) => ({
    ...state,
    settingsState: {
      ...state.settingsState,
      temperature: temperature,
    },
  })),

  on(settings.changeSignificantFigures, (state, { figures }) => ({
    ...state,
    settingsState: {
      ...state.settingsState,
      figures: figures,
    },
  })),

  on(settings.changeBackgroundImage, (state, { background }) => ({
    ...state,
    settingsState: {
      ...state.settingsState,
      background: background,
    },
  })),

  on(settings.changeTheme, (state, { theme }) => ({
    ...state,
    settingsState: {
      ...state.settingsState,
      theme: theme,
    },
  })),

  on(settings.toggleDegreeSign, (state) => ({
    ...state,
    settingsState: {
      ...state.settingsState,
      showDegreeSign: !state.settingsState.showDegreeSign,
    },
  })),

  on(weather.changeDetailMode, (state, { mode: dailyDetailViewMode }) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      detailMode: dailyDetailViewMode,
    },
  })),

  on(weather.incrementIndexDaily, (state) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      indexDaily: state.weatherState.indexDaily + 1,
    },
  })),

  on(weather.decrementIndexDaily, (state) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      indexDaily: state.weatherState.indexDaily - 1,
    },
  })),

  on(weather.incrementIndexHourly, (state) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      indexHourly: state.weatherState.indexHourly + 1,
    },
  })),

  on(weather.decrementIndexHourly, (state) => ({
    ...state,
    weatherState: {
      ...state.weatherState,
      indexHourly: state.weatherState.indexHourly - 1,
    },
  })),

  on(weather.changeReadingMode, (state, { mode }) => ({
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
