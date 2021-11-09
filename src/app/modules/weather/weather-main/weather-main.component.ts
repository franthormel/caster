import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';

import { WeatherData } from '../../../models/weather/weather-data.models';
import { WeatherGeolocation } from '../../../models/geolocation/geolocation.models';
import { StateManagerService } from '../../shared/services/state-manager.service';
import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css'],
})
export class WeatherMainComponent implements OnInit {
  weatherData$!: Observable<WeatherData>;
  geolocationsData$!: Observable<WeatherGeolocation[]>;

  geolocations!: WeatherGeolocation[];
  weatherData!: WeatherData;
  loading = true;

  constructor(
    public stateManager: StateManagerService,
    private dataManager: DataManagerService,
    private dialogHandler: DialogHandlerService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  get weatherLocation(): string {
    const geolocation = this.geolocations[0];

    return geolocation
      ? `${geolocation.name}, ${geolocation.country}`
      : `${this.weatherData.lat}, ${this.weatherData.lon}`;
  }

  private collectAllData(): Observable<[WeatherData, WeatherGeolocation[]]> {
    this.weatherData$ = this.dataManager.staticWeatherFile();
    this.geolocationsData$ = this.dataManager.staticGeolocationFile();

    this.weatherData$.subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (error) => {
        this.dialogHandler.showError(error as Error);
      },
    });

    this.geolocationsData$.subscribe({
      next: (data) => {
        this.geolocations = data;
      },
      error: (error) => {
        this.dialogHandler.showError(error as Error);
      },
    });

    return forkJoin([this.weatherData$, this.geolocationsData$]);
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
