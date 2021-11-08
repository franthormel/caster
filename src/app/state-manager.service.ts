import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './app-state.reducers';
import * as weather from './modules/weather/weather-state.actions';

import { environment } from '../environments/environment';
import {
  WeatherDetailMode,
  WeatherReadingMode,
} from './models/weather/weather.enums';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  private appState$!: Observable<AppState>;
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

  indexDailyIncrement() {
    if (this.canIndexDailyIncrement) {
      this.store.dispatch(weather.indexDailyIncrement());
    }
  }

  indexDailyDecrement() {
    if (this.canIndexDailyDecrement) {
      this.store.dispatch(weather.indexDailyDecrement());
    }
  }

  indexHourlyIncrement() {
    if (this.canIndexHourlyIncrement) {
      this.store.dispatch(weather.indexHourlyIncrement());
    }
  }

  indexHourlyDecrement() {
    if (this.canIndexHourlyDecrement) {
      this.store.dispatch(weather.indexHourlyDecrement());
    }
  }

  get detailModeIsFeelsLike(): boolean {
    return this.detailModeIs(WeatherDetailMode.FeelsLike);
  }

  get detailModeIsTemperature(): boolean {
    return this.detailModeIs(WeatherDetailMode.Temperature);
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

  get staticFile() : number {
    return this.appState.staticFile;
  }

  private get canIndexDailyDecrement(): boolean {
    return this.appState.weatherState.indexDaily >= 1;
  }

  private get canIndexDailyIncrement(): boolean {
    return this.appState.weatherState.indexDaily < environment.maxDaily - 1;
  }

  private get canIndexHourlyDecrement(): boolean {
    return this.appState.weatherState.indexHourly >= 1;
  }

  private get canIndexHourlyIncrement(): boolean {
    return this.appState.weatherState.indexHourly < environment.maxHourly - 1;
  }

  private changeDetailMode(mode: WeatherDetailMode) {
    this.store.dispatch(
      weather.detailModeUpdate({
        mode: mode,
      })
    );
  }

  private changeReadingMode(value: WeatherReadingMode) {
    this.store.dispatch(weather.readingModeUpdate({ mode: value }));
  }

  private detailModeIs(mode: WeatherDetailMode): boolean {
    return this.appState.weatherState.detailMode === mode;
  }

  private readingModeIs(mode: WeatherReadingMode): boolean {
    return this.readingMode === mode;
  }

  private initState() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.appState = state;
    });
  }
}
