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
  weather: WeatherData | undefined;
  loading: boolean | undefined;

  constructor(
    public dialog: MatDialog,
    private weatherDataService: WeatherDataService,
    public weatherModeService: WeatherModeService
  ) {}

  ngOnInit(): void {
    // Static weather data
    this.loading = true;

    this.weatherData$ = this.weatherDataService.localFileWeather();
    this.geolocationsData$ = this.weatherDataService.localFileGeolocation();

    const dataCollection$ = forkJoin([
      this.weatherData$,
      this.geolocationsData$,
    ]);

    this.weatherData$.subscribe({
      next: (data) => {
        this.weather = data;
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

    // Once all necessary data are loaded
    // toggle the `loading` variable accordingly
    dataCollection$.subscribe({
      next: (data) => {},
      complete: () => {
        this.loading = false;
      },
    });
  }

  /**
   * Geolocation data for child components
   */
  get geolocation(): Geolocation | undefined {
    return this.geolocations ? this.geolocations[0] : undefined;
  }

  /**
   * Data used for `mat-dialog`
   */
  get alerts(): WeatherAlert[] | undefined {
    return this.weather?.alerts;
  }

  /**
   * Used by `app-weather-toolbar` to determine
   * whether to show/hide the alert button icon
   */
  get alertsCount(): number | undefined {
    return this.alerts?.length;
  }

  showAlertDialog() {
    this.dialog.open(WeatherAlertComponent, {
      data: this.alerts,
    });
  }
}
