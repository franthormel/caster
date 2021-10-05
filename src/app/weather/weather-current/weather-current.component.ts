import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather/weather.models';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css'],
})
export class WeatherCurrentComponent implements OnInit {
  data: Weather | undefined;

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    this.weatherDataService
      .localFileWeatherData()
      .subscribe((data) => (this.data = data));
  }
}
