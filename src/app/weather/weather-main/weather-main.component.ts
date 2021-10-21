import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, forkJoin } from 'rxjs';

import { WeatherAlertComponent } from '../weather-alert/weather-alert.component';

import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherAlert } from '../../models/weather/weather-alert.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';

import { WeatherModeService } from '../weather-mode.service';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css'],
})
export class WeatherMainComponent implements OnInit {
  weatherData$: Observable<WeatherData> | undefined;
  geolocationsData$: Observable<Geolocation[]> | undefined;

  geolocations: Geolocation[] | undefined;
  weatherData: WeatherData | undefined;
  loading: boolean | undefined;

  constructor(
    public dialog: MatDialog,
    private weatherDataService: WeatherDataService,
    public weatherMode: WeatherModeService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.loading = true;

    const dataCollection$ = this.initThenCombineData();

    dataCollection$.subscribe({
      complete: () => {
        this.loading = false;
      },
    });
  }

  private initThenCombineData(): Observable<[WeatherData, Geolocation[]]> {
    this.weatherData$ = this.weatherDataService.localFileWeather();
    this.geolocationsData$ = this.weatherDataService.localFileGeolocation();
    this.weatherData$.subscribe({
      next: (data) => {
        this.weatherData = data;
      },
      error: (e) => {
        console.error('Weather static data error', e);
      },
    });

    this.geolocationsData$.subscribe({
      next: (data) => {
        this.geolocations = data;
      },
      error: (e) => {
        console.error('Geolocations static data error', e);
      },
    });

    return forkJoin([this.weatherData$, this.geolocationsData$]);
  }

  showAlertDialog() {
    this.dialog.open(WeatherAlertComponent, {
      data: this.alerts,
    });
  }

  get alertsCount(): number | undefined {
    return this.alerts?.length;
  }

  get geolocation(): Geolocation | undefined {
    return this.geolocations ? this.geolocations[0] : undefined;
  }

  get alerts(): WeatherAlert[] | undefined {
    return this.weatherData?.alerts;
  }
}
