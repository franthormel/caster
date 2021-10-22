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
  private appState$!: Observable<AppState>;
  private file!: number;

  constructor(
    private httpClient: HttpClient,
    private store: Store<{ appState: AppState }>
  ) {
    this.initFile();
  }

  private initFile() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.file = state.staticFile;
    });
  }

  localFileWeather(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(
      `${environment.assetsDataUrl}weather/${this.file}.json`,
      {
        responseType: 'json',
      }
    );
  }

  localFileGeolocation(): Observable<Geolocation[]> {
    return this.httpClient.get<Geolocation[]>(
      `${environment.assetsDataUrl}geolocations/${this.file}.json`,
      {
        responseType: 'json',
      }
    );
  }
}
