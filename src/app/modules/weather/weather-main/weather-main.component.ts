import { Component, OnInit } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { ErrorDialogComponent } from '../../shared/error-dialog/error-dialog.component';

import { WeatherData } from '../../../models/weather/weather-data.models';
import { WeatherGeolocation } from '../../../models/geolocation/geolocation.models';
import { StateManagerService } from '../../../state-manager.service';
import { DataManagerService } from '../../../data-manager.service';

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
    private dialog: MatDialog
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
    this.weatherData$ = this.dataManager.staticFileWeather();
    this.geolocationsData$ = this.dataManager.staticFileGeolocation();
    
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

  private initData() {
    const dataCollection$ = this.collectAllData();

    dataCollection$.subscribe({
      complete: () => {
        this.loading = false;
      },
    });
  }

  // TODO Move to dialogshowservice
  private showErrorDialog(error: Error) {
    this.dialog.open(ErrorDialogComponent, {
      data: error,
    });
  }
}
