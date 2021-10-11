import { Component, Input } from '@angular/core';
import { WeatherReadingHourly } from 'src/app/models/weather/weather-reading-hourly.models';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.css'],
})
export class WeatherHourlyComponent {
  @Input() weatherHour!: WeatherReadingHourly[];
}
