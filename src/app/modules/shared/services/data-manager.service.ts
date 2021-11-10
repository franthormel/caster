import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, concat } from 'rxjs';

import { AirPollution } from '../../../models/air-pollution/air-pollution.models';
import { WeatherGeolocation } from '../../../models/geolocation/geolocation.models';
import { WeatherData } from '../../../models/weather/weather-data.models';
import { StateManagerService } from './state-manager.service';

@Injectable({
  providedIn: 'root',
})

// TODO Refactor member names
export class DataManagerService {
  private readonly FILES = [1, 2, 3];

  private readonly DATA_URL = {
    STATIC: '/assets/data/',
    LIVE: {
      AIR: 'http://api.openweathermap.org/data/2.5/air_pollution/forecast',
      GEOCODING_REVERSE: 'http://api.openweathermap.org/geo/1.0/reverse',
      WEATHER: 'https://api.openweathermap.org/data/2.5/onecall',
    },
  };

  constructor(
    private httpClient: HttpClient,
    private stateManager: StateManagerService
  ) {}

  staticAirPollutionFile(): Observable<AirPollution> {
    return this.httpClient.get<AirPollution>(this.airPollutionFile, {
      responseType: 'json',
    });
  }

  staticGeolocationFile(): Observable<WeatherGeolocation[]> {
    return this.fetchGeolocation(this.geolocationFile);
  }

  staticGeolocationFiles(): Observable<Observable<WeatherGeolocation[]>> {
    let jsonDataCollection$: Observable<WeatherGeolocation[]>[] = [];

    this.FILES.forEach((file) => {
      const jsonFile = this.chooseGeolocationFile(file);
      const jsonData$ = this.fetchGeolocation(jsonFile);

      jsonDataCollection$.push(jsonData$);
    });

    return concat(jsonDataCollection$);
  }

  staticWeatherFile(): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(this.weatherFile, {
      responseType: 'json',
    });
  }

  private chooseGeolocationFile(index: number): string {
    return `${this.DATA_URL.STATIC}geolocations/${index}.json`;
  }

  private fetchGeolocation(url: string): Observable<WeatherGeolocation[]> {
    return this.httpClient.get<WeatherGeolocation[]>(url, {
      responseType: 'json',
    });
  }

  private get geolocationFile(): string {
    return this.chooseGeolocationFile(this.stateManager.staticFile);
  }

  private get weatherFile(): string {
    return `${this.DATA_URL.STATIC}weather/${this.stateManager.staticFile}.json`;
  }

  private get airPollutionFile(): string {
    return `${this.DATA_URL.STATIC}air_pollution/${this.stateManager.staticFile}.json`;
  }
}
