import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherAlert } from '../../models/weather/weather-alert.models';
import { WeatherGeolocation } from '../../models/geolocation/geolocation.models';

import { WeatherAlertComponent } from '../weather-alert/weather-alert.component';
import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';

import { StateManagerService } from '../../state-manager.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css'],
})
export class WeatherMainComponent implements OnInit {
  weatherData$: Observable<WeatherData> | undefined;
  geolocationsData$: Observable<WeatherGeolocation[]> | undefined;

  geolocations!: WeatherGeolocation[];
  weatherData!: WeatherData;
  loading = true;

  constructor(
    public stateManager: StateManagerService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  get dataIsLoaded(): boolean {
    return !this.loading && this.weatherData !== undefined;
  }

  get weatherLocation(): string {
    const geolocation = this.geolocations[0];

    return geolocation
      ? `${geolocation.name}, ${geolocation.country}`
      : `${this.weatherData.lat}, ${this.weatherData.lon}`;
  }

  private initData() {
    const dataCollection$ = this.initThenCombineData();

    dataCollection$.subscribe({
      complete: () => {
        this.loading = false;
      },
    });
  }

  private initThenCombineData(): Observable<
    [WeatherData, WeatherGeolocation[]]
  > {
    this.weatherData$ = this.stateManager.localFileWeather();
    this.geolocationsData$ = this.stateManager.localFileGeolocation();
    this.weatherData$.subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (e) => {
        this.showErrorDialog(e as Error);
      },
    });

    this.geolocationsData$.subscribe({
      next: (data) => {
        this.geolocations = data;
      },
      error: (e) => {
        this.showErrorDialog(e as Error);
      },
    });

    return forkJoin([this.weatherData$, this.geolocationsData$]);
  }

  private showErrorDialog(error: Error) {
    this.dialog.open(ErrorDialogComponent, {
      data: error,
    });
  }
}
