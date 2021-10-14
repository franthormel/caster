import { Component, Input } from '@angular/core';

import { WeatherData } from '../../models/weather/weather-data.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css'],
})
export class WeatherCurrentComponent {
  @Input() weatherData!: WeatherData;
  @Input() geolocation!: Geolocation;
}
