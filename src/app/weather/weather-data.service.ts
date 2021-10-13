import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Geolocation } from '../models/geolocation/geolocation.models';
import { WeatherData } from '../models/weather/weather-data.models';
import { environment } from '../../environments/environment';

import { AppState } from '../app-state.reducers';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  appState$: Observable<AppState> | undefined;
  file: number | undefined;

  constructor(
    private httpClient: HttpClient,
    private store: Store<{ appState: AppState }>
  ) {
    this.fileIndex();
  }

  fileIndex() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.file = state.staticFile;
    });
  }

  /**
   * Returns previously collected weather data
   * @returns Observable<Weather>
   */
  localFileWeather(): Observable<WeatherData> {
    const file = this.file ? this.file : 1;

    return this.httpClient.get<WeatherData>(
      `${environment.staticDataUrl}weather/${file}.json`,
      {
        responseType: 'json',
      }
    );
  }

  /**
   * Returns previously collected geolocation data
   * @returns Observable<Geolocation>
   */
  localFileGeolocation(): Observable<Geolocation[]> {
    const file = this.file ? this.file : 1;

    return this.httpClient.get<Geolocation[]>(
      `${environment.staticDataUrl}geolocations/${file}.json`,
      {
        responseType: 'json',
      }
    );
  }
}
