import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

import { AirPollution } from './models/air-pollution/air-pollution.models';
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

  staticFileAirPollution(): Observable<AirPollution> {
    return this.httpClient.get<AirPollution>(this.urlAirPollution, {
      responseType: 'json',
    });
  }

  staticFileGeolocation(): Observable<WeatherGeolocation[]> {
    return this.httpClient.get<WeatherGeolocation[]>(this.urlGeolocation, {
      responseType: 'json',
    });
  }

  staticFileWeather(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(this.urlWeather, {
      responseType: 'json',
    });
  }

  private get urlGeolocation(): string {
    return `${environment.assetsDataUrl}geolocations/${this.stateManager.staticFile}.json`;
  }

  private get urlWeather(): string {
    return `${environment.assetsDataUrl}weather/${this.stateManager.staticFile}.json`;
  }

  private get urlAirPollution(): string {
    return `${environment.assetsDataUrl}air_pollution/${this.stateManager.staticFile}.json`;
  }
}
