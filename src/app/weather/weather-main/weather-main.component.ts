import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather/weather.models';
import { WeatherDataService } from '../weather-data.service';
import { WeatherReadingType } from 'src/app/models/weather/weather.enums';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css'],
})
export class WeatherMainComponent implements OnInit {
  mode: WeatherReadingType = WeatherReadingType.Current;
  loading: boolean | undefined;
  data: Weather | undefined;

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    this.loading = true;
    this.weatherDataService.localFileWeatherData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (e) => {
        // TODO: Display this as a mat-dialog
        console.error('Error occured', e);
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

  changeMode(value: WeatherReadingType) {
    this.mode = value;
  }
}
