import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WeatherReadingType } from '../models/weather/weather.enums';

import { updateWeatherMode } from '../app-state.actions';
import { AppState } from '../app-state.reducers';

@Injectable({
  providedIn: 'root',
})
export class WeatherModeService {
  private appState$!: Observable<AppState>;

  private mode: WeatherReadingType | undefined;

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
    return this.mode === WeatherReadingType.Current;
  }

  get isHourly(): boolean {
    return this.mode === WeatherReadingType.Hourly;
  }

  get isDaily(): boolean {
    return this.mode === WeatherReadingType.Daily;
  }

  private changeMode(value: WeatherReadingType) {
    this.store.dispatch(updateWeatherMode({ mode: value }));
  }

  changeToCurrent() {
    this.changeMode(WeatherReadingType.Current);
  }

  changeToHourly() {
    this.changeMode(WeatherReadingType.Hourly);
  }

  changeToDaily() {
    this.changeMode(WeatherReadingType.Daily);
  }
}
