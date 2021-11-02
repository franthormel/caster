import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AppState } from '../app-state.reducers';
import { WeatherGeolocation } from '../models/geolocation/geolocation.models';
import { WeatherData } from '../models/weather/weather-data.models';
import { WeatherReadingMode } from '../models/weather/weather.enums';
import { modeUpdate } from './weather-state.actions';
import * as weather from './weather-state.actions';
import { WeatherState } from './weather-state.reducers';

@Injectable({
  providedIn: 'root',
})
export class WeatherStateManagerService {
  private appState$!: Observable<AppState>;

  private staticFile!: number;
  private weatherState!: WeatherState;

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
      `${environment.assetsDataUrl}geolocations/${this.staticFile}.json`,
      {
        responseType: 'json',
      }
    );
  }

  localFileWeather(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(
      `${environment.assetsDataUrl}weather/${this.staticFile}.json`,
      {
        responseType: 'json',
      }
    );
  }

  get isCurrent(): boolean {
    return this.mode === WeatherReadingMode.Current;
  }

  get indexDaily(): number {
    return this.weatherState.indexDaily;
  }

  get indexHourly(): number {
    return this.weatherState.indexHourly;
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

  private initState() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.staticFile = state.staticFile;
      this.weatherState = state.weatherState;
    });
  }

  private get mode(): WeatherReadingMode {
    return this.weatherState.mode;
  }
}
