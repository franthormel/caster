import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WeatherReadingMode } from '../models/weather/weather.enums';

import { modeUpdate } from './weather-state.actions';
import { AppState } from '../app-state.reducers';

@Injectable({
  providedIn: 'root',
})
export class WeatherModeService {
  private appState$!: Observable<AppState>;
  private mode!: WeatherReadingMode;

  constructor(private store: Store<{ appState: AppState }>) {
    this.initWeatherMode();
  }

  changeToCurrent() {
    this.changeMode(WeatherReadingMode.Current);
  }

  changeToDaily() {
    this.changeMode(WeatherReadingMode.Daily);
  }

  changeToHourly() {
    this.changeMode(WeatherReadingMode.Hourly);
  }

  get isCurrent(): boolean {
    return this.mode === WeatherReadingMode.Current;
  }

  get isDaily(): boolean {
    return this.mode === WeatherReadingMode.Daily;
  }

  get isHourly(): boolean {
    return this.mode === WeatherReadingMode.Hourly;
  }

  private changeMode(value: WeatherReadingMode) {
    this.store.dispatch(modeUpdate({ mode: value }));
  }

  private initWeatherMode() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.mode = state.weatherState.mode;
    });
  }
}
