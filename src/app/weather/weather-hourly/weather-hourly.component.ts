import { Component, Input } from '@angular/core';

import { WeatherReadingHourly } from '../../models/weather/weather-reading-hourly.models';
import { WeatherData } from '../../models/weather/weather-data.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.css'],
})
export class WeatherHourlyComponent {
  @Input() weatherData!: WeatherData;
  @Input() geolocation!: Geolocation;
}
