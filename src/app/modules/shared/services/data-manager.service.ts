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
export class DataManagerService {
  private readonly URLS = {
    FILE: '/assets/data/',
    ONLINE: {
      AIR: 'http://api.openweathermap.org/data/2.5/air_pollution/forecast',
      GEOCODING_REVERSE: 'http://api.openweathermap.org/geo/1.0/reverse',
      WEATHER: 'https://api.openweathermap.org/data/2.5/onecall',
    },
  };

  private readonly FILES = [1, 2, 3];

  constructor(
    private httpClient: HttpClient,
    private stateManager: StateManagerService
  ) {}

  fileDataAirPollution(): Observable<AirPollution> {
    return this.httpGetAirPollution(this.airPollutionFile);
  }

  fileDataGeolocation(): Observable<WeatherGeolocation[]> {
    return this.httpGetGeolocation(this.geolocationFile);
  }

  fileDataGeolocations(): Observable<Observable<WeatherGeolocation[]>> {
    let jsonDataCollection$: Observable<WeatherGeolocation[]>[] = [];

    this.FILES.forEach((file) => {
      const jsonFile = this.chooseGeolocationFile(file);
      const jsonData$ = this.httpGetGeolocation(jsonFile);

      jsonDataCollection$.push(jsonData$);
    });

    return concat(jsonDataCollection$);
  }

  fileDataWeather(): Observable<WeatherData> {
    return this.httpGetWeather(this.weatherFile);
  }

  private chooseGeolocationFile(index: number): string {
    return `${this.URLS.FILE}geolocations/${index}.json`;
  }

  private httpGetAirPollution(url: string): Observable<AirPollution> {
    return this.httpClient.get<AirPollution>(url, {
      responseType: 'json',
    });
  }

  private httpGetGeolocation(url: string): Observable<WeatherGeolocation[]> {
    return this.httpClient.get<WeatherGeolocation[]>(url, {
      responseType: 'json',
    });
  }

  private httpGetWeather(url: string): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(url, {
      responseType: 'json',
    });
  }

  private get geolocationFile(): string {
    return this.chooseGeolocationFile(this.stateManager.locationsFile);
  }

  private get weatherFile(): string {
    return `${this.URLS.FILE}weather/${this.stateManager.locationsFile}.json`;
  }

  private get airPollutionFile(): string {
    return `${this.URLS.FILE}air_pollution/${this.stateManager.locationsFile}.json`;
  }
}
