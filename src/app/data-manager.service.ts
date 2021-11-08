import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';
import { WeatherGeolocation } from './models/geolocation/geolocation.models';
import { WeatherData } from './models/weather/weather-data.models';
import { StateManagerService } from './state-manager.service';

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  constructor(
    private httpClient: HttpClient,
    private stateManager: StateManagerService
  ) {}

  localFileGeolocation(): Observable<WeatherGeolocation[]> {
    return this.httpClient.get<WeatherGeolocation[]>(
      `${environment.assetsDataUrl}geolocations/${this.stateManager.staticFile}.json`,
      {
        responseType: 'json',
      }
    );
  }

  localFileWeather(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(
      `${environment.assetsDataUrl}weather/${this.stateManager.staticFile}.json`,
      {
        responseType: 'json',
      }
    );
  }
}
