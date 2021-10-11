import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { WeatherAlertComponent } from '../weather-alert/weather-alert.component';

import { WeatherData } from 'src/app/models/weather/weather-data.models';
import { WeatherReadingType } from 'src/app/models/weather/weather.enums';
import { WeatherAlert } from 'src/app/models/weather/weather-alert.models';

import { WeatherDataService } from '../weather-data.service';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { WeatherModeState } from '../weather.reducer';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css'],
})
export class WeatherMainComponent implements OnInit {
  weatherModeState$: Observable<WeatherModeState> | undefined;
  weatherData$: Observable<WeatherData> | undefined;

  mode: WeatherReadingType | undefined;
  weather: WeatherData | undefined;
  loading: boolean | undefined;

  constructor(
    public dialog: MatDialog,
    private store: Store<{ weatherMode: WeatherModeState }>,
    private weatherDataService: WeatherDataService
  ) {}

  ngOnInit(): void {
    this.weatherModeState$ = this.store.select('weatherMode');

    this.weatherModeState$.subscribe((state) => {
      this.mode = state.mode;
    });

    // Static weather data
    this.weatherData$ = this.weatherDataService.localFileWeather();

    this.weatherData$.subscribe({
      next: (data) => {
        this.loading = true;
        this.weather = data;
      },
      error: (e) => {
        console.error('Weather static data error', e);
      },
      complete: () => {
        this.loading = false;
      },
    });
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

  get isCurrent(): boolean {
    return this.mode === WeatherReadingType.Current;
  }

  get isHourly(): boolean {
    return this.mode === WeatherReadingType.Hourly;
  }

  get isDaily(): boolean {
    return this.mode === WeatherReadingType.Daily;
  }

  showAlertDialog() {
    this.dialog.open(WeatherAlertComponent, {
      data: this.alerts,
    });
  }
}
