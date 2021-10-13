import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { weatherModeUpdate } from '../app-state.actions';
import { AppState } from '../app-state.reducers';

import { WeatherReadingType } from '../models/weather/weather.enums';

@Injectable({
  providedIn: 'root',
})
export class WeatherModeService {
  appState$: Observable<AppState> | undefined;

  mode: WeatherReadingType | undefined;

  constructor(private store: Store<{ appState: AppState }>) {
    this.fileIndex();
  }

  fileIndex() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.mode = state.weatherMode;
    });
  }

  get isCurrent(): boolean {
    return this.mode === WeatherReadingType.Current;
  }

  get isHourly(): boolean {
    return this.mode === WeatherReadingType.Hourly;
  }

  get isDaily(): boolean {
    return this.mode === WeatherReadingType.Daily;
  }

  changeToCurrent() {
    this._changeMode(WeatherReadingType.Current);
  }

  changeToHourly() {
    this._changeMode(WeatherReadingType.Hourly);
  }

  changeToDaily() {
    this._changeMode(WeatherReadingType.Daily);
  }

  _changeMode(value: WeatherReadingType) {
    this.store.dispatch(weatherModeUpdate({ mode: value }));
  }
}
