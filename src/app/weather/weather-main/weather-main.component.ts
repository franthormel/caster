import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather/weather.models';
import { WeatherDataService } from '../weather-data.service';
import { WeatherReadingType } from 'src/app/models/weather/weather.enums';
import { Observable } from 'rxjs';
import { WeatherState } from '../weather.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css'],
})
export class WeatherMainComponent implements OnInit {
  weatherState$: Observable<WeatherState> | undefined;
  mode: WeatherReadingType | undefined;
  loading: boolean | undefined;
  data: Weather | undefined;

  constructor(
    private weatherDataService: WeatherDataService,
    private store: Store<{ weather: WeatherState }>
  ) {}

  ngOnInit(): void {
    // Initialize weather state
    this.weatherState$ = this.store.select('weather');

    // Weather mode
    this.weatherState$.subscribe({
      next: (state) => {
        this.mode = state.mode;
      },
      error: (e) => {
        console.error('Weather state error', e);
      },
    });

    // Static weather data
    this.weatherDataService.localFileWeatherData().subscribe({
      next: (data) => {
        this.loading = true;
        this.data = data;
      },
      error: (e) => {
        console.error('Weather static data error', e);
      },
      complete: () => {
        this.loading = false;
      },
    });
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
}
