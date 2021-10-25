import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WeatherReadingMode } from '../models/weather/weather.enums';

import { weatherModeUpdate } from '../app-state.actions';
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

  private initWeatherMode() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.mode = state.weatherMode;
    });
  }

  get isCurrent(): boolean {
    return this.mode === WeatherReadingMode.Current;
  }

  get isHourly(): boolean {
    return this.mode === WeatherReadingMode.Hourly;
  }

  get isDaily(): boolean {
    return this.mode === WeatherReadingMode.Daily;
  }

  changeToCurrent() {
    this.changeMode(WeatherReadingMode.Current);
  }

  changeToHourly() {
    this.changeMode(WeatherReadingMode.Hourly);
  }

  changeToDaily() {
    this.changeMode(WeatherReadingMode.Daily);
  }

  private changeMode(value: WeatherReadingMode) {
    this.store.dispatch(weatherModeUpdate({ mode: value }));
  }
}
