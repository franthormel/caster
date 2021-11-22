import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { WeatherData } from '../../../models/weather/weather-data.models';
import { WeatherGeolocation } from '../../../models/geolocation/geolocation.models';

import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';
import { StateManagerService } from '../../shared/services/state-manager.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css'],
})
export class WeatherMainComponent implements OnInit {
  geolocation!: WeatherGeolocation;
  loading = true;
  weatherData!: WeatherData;

  constructor(
    private dataManager: DataManagerService,
    private dialogHandler: DialogHandlerService,
    public stateManager: StateManagerService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  get weatherLocation(): string {
    return this.geolocation
      ? `${this.geolocation.name}, ${this.geolocation.country}`
      : `${this.weatherData.lat}, ${this.weatherData.lon}`;
  }

  private collectAllData(): Observable<[WeatherData, WeatherGeolocation[]]> {
    const weatherData$ = this.dataManager.fileDataWeather();
    const geolocationsData$ = this.dataManager.fileDataGeolocation();

    weatherData$.subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (error) => {
        this.dialogHandler.showError(error as Error);
      },
    });

    geolocationsData$.subscribe({
      next: (data) => {
        this.geolocation = data[0];
      },
      error: (error) => {
        this.dialogHandler.showError(error as Error);
      },
    });

    return forkJoin([weatherData$, geolocationsData$]);
  }

  private initData() {
    const data$ = this.collectAllData();

    data$.subscribe({
      complete: () => {
        this.loading = false;
      },
    });
  }
}
