import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Geolocation } from '../models/geolocation/geolocation.models';
import { WeatherData } from 'src/app/models/weather/weather-data.models';

import { Store } from '@ngrx/store';
import { AppState } from '../app-state.reducers';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService implements OnInit {
  appState$: Observable<AppState> | undefined;
  file: number | undefined;

  constructor(
    private httpClient: HttpClient,
    private store: Store<{ appState: AppState }>
  ) {}

  ngOnInit(): void {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.file = state.staticFile;
    });
  }

  /**
   * Returns previously collected weather data
   * @param index Name of file (1 to 3).
   * @returns Observable<Weather>
   */
  localFileWeather(index?: number): Observable<WeatherData> {
    const file = this.file ? this.file : 1;

    return this.httpClient.get<WeatherData>(
      `/assets/data/weather/${file}.json`,
      {
        responseType: 'json',
      }
    );
  }

  /**
   * Returns previously collected geolocation data
   * @param index Name of file (1 to 3).
   * @returns Observable<Geolocation>
   */
  localFileGeolocation(index?: number): Observable<Geolocation[]> {
    const file = this.file ? this.file : 1;

    return this.httpClient.get<Geolocation[]>(
      `/assets/data/geolocations/${file}.json`,
      {
        responseType: 'json',
      }
    );
  }
}
