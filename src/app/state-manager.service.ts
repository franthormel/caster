import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from './app-state.reducers';
import * as weather from './weather/weather-state.actions';

import { environment } from '../environments/environment';
import { WeatherGeolocation } from './models/geolocation/geolocation.models';
import { WeatherData } from './models/weather/weather-data.models';
import { WeatherReadingMode } from './models/weather/weather.enums';

@Injectable({
  providedIn: 'root',
})
export class StateManagerService {
  private appState$!: Observable<AppState>;

  private appState!: AppState;

  constructor(
    private httpClient: HttpClient,
    private store: Store<{ appState: AppState }>
  ) {
    this.initState();
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

  indexDailyIncrement() {
    this.store.dispatch(weather.indexDailyIncrement());
  }

  indexDailyDecrement() {
    this.store.dispatch(weather.indexDailyDecrement());
  }

  indexHourlyIncrement() {
    this.store.dispatch(weather.indexHourlyIncrement());
  }

  indexHourlyDecrement() {
    this.store.dispatch(weather.indexHourlyDecrement());
  }

  localFileGeolocation(): Observable<WeatherGeolocation[]> {
    return this.httpClient.get<WeatherGeolocation[]>(
      `${environment.assetsDataUrl}geolocations/${this.appState.staticFile}.json`,
      {
        responseType: 'json',
      }
    );
  }

  localFileWeather(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(
      `${environment.assetsDataUrl}weather/${this.appState.staticFile}.json`,
      {
        responseType: 'json',
      }
    );
  }

  get indexDaily(): number {
    return this.appState.weatherState.indexDaily;
  }

  get indexHourly(): number {
    return this.appState.weatherState.indexHourly;
  }

  get isCurrent(): boolean {
    return this.appState.weatherState.mode === WeatherReadingMode.Current;
  }

  get isDaily(): boolean {
    return this.appState.weatherState.mode === WeatherReadingMode.Daily;
  }

  get isHourly(): boolean {
    return this.appState.weatherState.mode === WeatherReadingMode.Hourly;
  }

  private changeMode(value: WeatherReadingMode) {
    this.store.dispatch(weather.modeUpdate({ mode: value }));
  }

  private initState() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.appState = state;
    });
  }
}
