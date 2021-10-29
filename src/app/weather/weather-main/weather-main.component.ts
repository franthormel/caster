import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, forkJoin } from 'rxjs';

import { WeatherAlertComponent } from '../weather-alert/weather-alert.component';

import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherAlert } from '../../models/weather/weather-alert.models';
import { WeatherGeolocation } from '../../models/geolocation/geolocation.models';

import { WeatherModeService } from '../weather-mode.service';
import { WeatherDataService } from '../weather-data.service';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

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

  loading: boolean = true;
  showError: boolean | undefined;

  constructor(
    public dialog: MatDialog,
    private weatherDataService: WeatherDataService,
    public weatherMode: WeatherModeService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    const dataCollection$ = this.initThenCombineData();

    dataCollection$.subscribe({
      complete: () => {
        this.loading = false;
        this.showError = false;
      },
    });
  }

  private initThenCombineData(): Observable<
    [WeatherData, WeatherGeolocation[]]
  > {
    this.weatherData$ = this.weatherDataService.localFileWeather();
    this.geolocationsData$ = this.weatherDataService.localFileGeolocation();
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

  get showContent(): boolean {
    return this.weatherData !== undefined && this.showError === false;
  }

  showAlertDialog() {
    this.dialog.open(WeatherAlertComponent, {
      data: this.alerts,
    });
  }

  get alertsCount(): number {
    return this.alerts ? this.alerts.length : 0;
  }

  private get alerts(): WeatherAlert[] | undefined {
    return this.weatherData.alerts;
  }

  get geolocation(): WeatherGeolocation | undefined {
    return this.geolocations[0];
  }
}
