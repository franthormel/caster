import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../app-state.reducers';
import { changeStaticFile } from '../../../app-state.actions';
import * as weather from '../../../modules/weather/weather-state.actions';
import * as airPollution from '../../../modules/air-pollution/air-pollution-state.actions';
import * as settings from '../../../modules/settings/settings-state.actions';

import {
  WeatherDetailMode,
  WeatherReadingMode,
} from '../../../models/weather/weather.enums';

import {
  SettingsTemperature,
  SettingsSignificantFigures,
  SettingsBackgroundImage,
  SettingsTheme,
} from '../../../models/settings.enums';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  private readonly MAX = {
    HOURLY: 47,
    DAILY: 7,
    AIR_POLLUTION: 113,
  };

  private appState!: AppState;

  constructor(private store: Store<{ appState: AppState }>) {
    this.initState();
  }

  changeDetailModeToFeelsLike() {
    if (!this.detailModeIsFeelsLike) {
      this.changeDetailMode(WeatherDetailMode.FeelsLike);
    }
  }

  changeDetailModeToTemperature() {
    if (!this.detailModeIsTemperature) {
      this.changeDetailMode(WeatherDetailMode.Temperature);
    }
  }

  changeStaticFile(file: number) {
    if (this.staticFile !== file) {
      this.store.dispatch(changeStaticFile({ file: file }));
    }
  }

  changeReadingModeToCurrent() {
    if (!this.readingModeIsCurrent) {
      this.changeReadingMode(WeatherReadingMode.Current);
    }
  }

  changeReadingModeToDaily() {
    if (!this.readingModeIsDaily) {
      this.changeReadingMode(WeatherReadingMode.Daily);
    }
  }

  changeReadingModeToHourly() {
    if (!this.readingModeIsHourly) {
      this.changeReadingMode(WeatherReadingMode.Hourly);
    }
  }

  changeSettingsBackgroundImage(background: SettingsBackgroundImage) {
    if (!this.settingsBackgroundImageIs(background)) {
      this.store.dispatch(
        settings.changeBackgroundImage({ background: background })
      );
    }
  }

  changeSettingsSignificantFigures(figures: SettingsSignificantFigures) {
    if (!this.settingsSignificantFiguresIs(figures)) {
      this.store.dispatch(
        settings.changeSignificantFigures({ figures: figures })
      );
    }
  }

  changeSettingsTemperature(temperature: SettingsTemperature) {
    if (!this.settingsTemperatureIs(temperature)) {
      this.store.dispatch(
        settings.changeTemperature({ temperature: temperature })
      );
    }
  }

  changeSettingsTheme(theme: SettingsTheme) {
    if (!this.settingsThemeIs(theme)) {
      this.store.dispatch(settings.changeTheme({ theme: theme }));
    }
  }

  indexAirPollutionIncrement() {
    if (this.canIndexAirPollutionIncrement) {
      this.store.dispatch(airPollution.incrementIndex());
    }
  }

  indexAirPollutionDecrement() {
    if (this.canIndexAirPollutionDecrement) {
      this.store.dispatch(airPollution.decrementIndex());
    }
  }

  indexDailyIncrement() {
    if (this.canIndexDailyIncrement) {
      this.store.dispatch(weather.incrementIndexDaily());
    }
  }

  indexDailyDecrement() {
    if (this.canIndexDailyDecrement) {
      this.store.dispatch(weather.decrementIndexDaily());
    }
  }

  indexHourlyIncrement() {
    if (this.canIndexHourlyIncrement) {
      this.store.dispatch(weather.incrementIndexHourly());
    }
  }

  indexHourlyDecrement() {
    if (this.canIndexHourlyDecrement) {
      this.store.dispatch(weather.decrementIndexHourly());
    }
  }

  settingsToggleDegreeSign() {
    this.store.dispatch(settings.toggleDegreeSign());
  }

  get detailModeIsFeelsLike(): boolean {
    return this.detailModeIs(WeatherDetailMode.FeelsLike);
  }

  get detailModeIsTemperature(): boolean {
    return this.detailModeIs(WeatherDetailMode.Temperature);
  }

  get indexAirPollution(): number {
    return this.appState.airPollutionState.index;
  }

  get indexDaily(): number {
    return this.appState.weatherState.indexDaily;
  }

  get indexHourly(): number {
    return this.appState.weatherState.indexHourly;
  }

  get readingMode(): WeatherReadingMode {
    return this.appState.weatherState.readingMode;
  }

  get readingModeIsCurrent(): boolean {
    return this.readingModeIs(WeatherReadingMode.Current);
  }

  get readingModeIsDaily(): boolean {
    return this.readingModeIs(WeatherReadingMode.Daily);
  }

  get readingModeIsHourly(): boolean {
    return this.readingModeIs(WeatherReadingMode.Hourly);
  }

  get settingsTemperature(): SettingsTemperature {
    return this.appState.settingsState.temperature;
  }

  get settingsSignificantFigures(): SettingsSignificantFigures {
    return this.appState.settingsState.significantFigures;
  }
  get settingsBackgroundImage(): SettingsBackgroundImage {
    return this.appState.settingsState.backgroundImage;
  }
  get settingsTheme(): SettingsTheme {
    return this.appState.settingsState.theme;
  }

  get settingsDegreeSign(): boolean {
    return this.appState.settingsState.showDegreeSign;
  }

  get staticFile(): number {
    return this.appState.staticFile;
  }

  private get canIndexAirPollutionDecrement(): boolean {
    return this.indexAirPollution >= 1;
  }

  private get canIndexAirPollutionIncrement(): boolean {
    return this.indexAirPollution < this.MAX.AIR_POLLUTION - 1;
  }

  private get canIndexDailyDecrement(): boolean {
    return this.indexDaily >= 1;
  }

  private get canIndexDailyIncrement(): boolean {
    return this.indexDaily < this.MAX.DAILY - 1;
  }

  private get canIndexHourlyDecrement(): boolean {
    return this.indexHourly >= 1;
  }

  private get canIndexHourlyIncrement(): boolean {
    return this.indexHourly < this.MAX.HOURLY - 1;
  }

  private changeDetailMode(mode: WeatherDetailMode) {
    this.store.dispatch(
      weather.changeDetailMode({
        mode: mode,
      })
    );
  }

  private changeReadingMode(value: WeatherReadingMode) {
    this.store.dispatch(weather.changeReadingMode({ mode: value }));
  }

  private detailModeIs(mode: WeatherDetailMode): boolean {
    return this.appState.weatherState.detailMode === mode;
  }

  private initState() {
    const appState$ = this.store.select('appState');

    appState$.subscribe((state) => {
      this.appState = state;
    });
  }

  private readingModeIs(mode: WeatherReadingMode): boolean {
    return this.readingMode === mode;
  }

  private settingsBackgroundImageIs(
    background: SettingsBackgroundImage
  ): boolean {
    return this.appState.settingsState.backgroundImage === background;
  }

  private settingsSignificantFiguresIs(
    figures: SettingsSignificantFigures
  ): boolean {
    return this.appState.settingsState.significantFigures === figures;
  }

  private settingsTemperatureIs(temperature: SettingsTemperature): boolean {
    return this.appState.settingsState.temperature === temperature;
  }

  private settingsThemeIs(theme: SettingsTheme): boolean {
    return this.appState.settingsState.theme === theme;
  }
}
