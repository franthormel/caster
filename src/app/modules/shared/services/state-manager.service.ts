import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../app-state.reducers';

import * as airPollution from '../../../modules/air-pollution/air-pollution-state.actions';
import * as locations from '../../../modules/locations/locations-state.actions';
import * as settings from '../../../modules/settings/settings-state.actions';
import * as weather from '../../../modules/weather/weather-state.actions';

import {
  WeatherDetailMode,
  WeatherReadingMode,
} from '../../../models/weather/weather.enums';

import {
  SettingsDatasource,
  SettingsTemperature,
  SettingsTheme,
} from '../../../models/settings.enums';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  // TODO Make the values dynamic
  private readonly MAX = {
    HOURLY: 47,
    DAILY: 7,
    AIR_POLLUTION: 113,
  };

  private appState!: AppState;

  constructor(private store: Store<{ appState: AppState }>) {
    this.initState();
  }

  changeLocationsFile(file: number) {
    if (this.locationsFile !== file) {
      this.store.dispatch(locations.changeLocationsFile({ file }));
    }
  }

  changeWeatherDetailModeToFeelsLike() {
    if (!this.weatherDetailModeIsFeelsLike) {
      this.changeWeatherDetailMode(WeatherDetailMode.FeelsLike);
    }
  }

  changeWeatherDetailModeToTemperature() {
    if (!this.weatherDetailModeIsTemperature) {
      this.changeWeatherDetailMode(WeatherDetailMode.Temperature);
    }
  }

  changeWeatherReadingModeToCurrent() {
    if (!this.weatherReadingModeIsCurrent) {
      this.changeWeatherReadingMode(WeatherReadingMode.Current);
    }
  }

  changeWeatherReadingModeToDaily() {
    if (!this.weatherReadingModeIsDaily) {
      this.changeWeatherReadingMode(WeatherReadingMode.Daily);
    }
  }

  changeWeatherReadingModeToHourly() {
    if (!this.weatherReadingModeIsHourly) {
      this.changeWeatherReadingMode(WeatherReadingMode.Hourly);
    }
  }

  changeSettingsDatasource(datasource: SettingsDatasource) {
    if (!this.settingsDatasourceIs(datasource)) {
      this.store.dispatch(settings.changeDatasource({ datasource }));
    }
  }

  changeSettingsTemperature(temperature: SettingsTemperature) {
    if (!this.settingsTemperatureIs(temperature)) {
      this.store.dispatch(settings.changeTemperature({ temperature }));
    }
  }

  changeSettingsTheme(theme: SettingsTheme) {
    if (!this.settingsThemeIs(theme)) {
      this.store.dispatch(settings.changeTheme({ theme }));
    }
  }

  decrementAirPollutionIndex() {
    if (this.canAirPollutionIndexDecrement) {
      this.store.dispatch(airPollution.decrementIndex());
    }
  }

  decrementWeatherIndexDaily() {
    if (this.canWeatherIndexDailyDecrement) {
      this.store.dispatch(weather.decrementIndexDaily());
    }
  }

  decrementWeatherIndexHourly() {
    if (this.canWeatherIndexHourlyDecrement) {
      this.store.dispatch(weather.decrementIndexHourly());
    }
  }

  incrementAirPollutionIndex() {
    if (this.canAirPollutionIndexIncrement) {
      this.store.dispatch(airPollution.incrementIndex());
    }
  }

  incrementWeatherIndexDaily() {
    if (this.canWeatherIndexDailyIncrement) {
      this.store.dispatch(weather.incrementIndexDaily());
    }
  }

  incrementWeatherIndexHourly() {
    if (this.canWeatherIndexHourlyIncrement) {
      this.store.dispatch(weather.incrementIndexHourly());
    }
  }

  settingsThemeIs(theme: SettingsTheme): boolean {
    return this.appState.settingsState.theme === theme;
  }

  toggleSettingsDegreeSign() {
    this.store.dispatch(settings.toggleDegreeSign());
  }

  get airPollutionIndex(): number {
    return this.appState.airPollutionState.index;
  }

  get locationsFile(): number {
    return this.appState.locationsState.file;
  }

  get settingsDatasource(): SettingsDatasource {
    return this.appState.settingsState.datasource;
  }

  get settingsDegreeSign(): boolean {
    return this.appState.settingsState.showDegreeSign;
  }

  get settingsTemperature(): SettingsTemperature {
    return this.appState.settingsState.temperature;
  }

  get settingsTheme(): SettingsTheme {
    return this.appState.settingsState.theme;
  }

  get weatherDetailModeIsFeelsLike(): boolean {
    return this.weatherDetailModeIs(WeatherDetailMode.FeelsLike);
  }

  get weatherDetailModeIsTemperature(): boolean {
    return this.weatherDetailModeIs(WeatherDetailMode.Temperature);
  }

  get weatherIndexDaily(): number {
    return this.appState.weatherState.indexDaily;
  }

  get weatherIndexHourly(): number {
    return this.appState.weatherState.indexHourly;
  }

  get weatherReadingMode(): WeatherReadingMode {
    return this.appState.weatherState.readingMode;
  }

  get weatherReadingModeIsCurrent(): boolean {
    return this.weatherReadingModeIs(WeatherReadingMode.Current);
  }

  get weatherReadingModeIsDaily(): boolean {
    return this.weatherReadingModeIs(WeatherReadingMode.Daily);
  }

  get weatherReadingModeIsHourly(): boolean {
    return this.weatherReadingModeIs(WeatherReadingMode.Hourly);
  }

  private changeWeatherDetailMode(detailMode: WeatherDetailMode) {
    this.store.dispatch(weather.changeDetailMode({ detailMode }));
  }

  private changeWeatherReadingMode(readingMode: WeatherReadingMode) {
    this.store.dispatch(weather.changeReadingMode({ readingMode }));
  }

  private initState() {
    const appState$ = this.store.select('appState');

    appState$.subscribe((state) => {
      this.appState = state;
    });
  }

  private settingsDatasourceIs(datasource: SettingsDatasource): boolean {
    return this.appState.settingsState.datasource === datasource;
  }

  private settingsTemperatureIs(temperature: SettingsTemperature): boolean {
    return this.appState.settingsState.temperature === temperature;
  }

  private weatherDetailModeIs(mode: WeatherDetailMode): boolean {
    return this.appState.weatherState.detailMode === mode;
  }

  private weatherReadingModeIs(mode: WeatherReadingMode): boolean {
    return this.weatherReadingMode === mode;
  }

  private get canAirPollutionIndexDecrement(): boolean {
    return this.airPollutionIndex >= 1;
  }

  private get canAirPollutionIndexIncrement(): boolean {
    return this.airPollutionIndex < this.MAX.AIR_POLLUTION - 1;
  }

  private get canWeatherIndexDailyDecrement(): boolean {
    return this.weatherIndexDaily >= 1;
  }

  private get canWeatherIndexDailyIncrement(): boolean {
    return this.weatherIndexDaily < this.MAX.DAILY - 1;
  }

  private get canWeatherIndexHourlyDecrement(): boolean {
    return this.weatherIndexHourly >= 1;
  }

  private get canWeatherIndexHourlyIncrement(): boolean {
    return this.weatherIndexHourly < this.MAX.HOURLY - 1;
  }
}
