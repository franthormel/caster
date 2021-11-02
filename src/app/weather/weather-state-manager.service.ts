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

  private _indexHourly!: number;
  private _indexDaily!: number;
  private mode!: WeatherReadingMode;
  private file!: number;

  constructor(
    private httpClient: HttpClient,
    private store: Store<{ appState: AppState }>
  ) {
    this.initIndexes();
    this.initWeatherMode();
    this.initFile();
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

  changeToCurrent() {
    this.changeMode(WeatherReadingMode.Current);
  }

  changeToDaily() {
    this.changeMode(WeatherReadingMode.Daily);
  }

  changeToHourly() {
    this.changeMode(WeatherReadingMode.Hourly);
  }

  localFileGeolocation(): Observable<WeatherGeolocation[]> {
    return this.httpClient.get<WeatherGeolocation[]>(
      `${environment.assetsDataUrl}geolocations/${this.file}.json`,
      {
        responseType: 'json',
      }
    );
  }

  localFileWeather(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(
      `${environment.assetsDataUrl}weather/${this.file}.json`,
      {
        responseType: 'json',
      }
    );
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

  get indexDaily(): number {
    return this._indexDaily;
  }

  get indexHourly(): number {
    return this._indexHourly;
  }

  private initIndexes() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this._indexHourly = state.weatherState.indexHourly;
      this._indexDaily = state.weatherState.indexDaily;
    });
  }

  private initFile() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.file = state.staticFile;
    });
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
