import { Component, Input } from '@angular/core';

import { WeatherReadingHourly } from '../../models/weather/weather-reading-hourly.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';

@Component({
  selector: 'app-weather-hourly',
  templateUrl: './weather-hourly.component.html',
  styleUrls: ['./weather-hourly.component.css'],
})
export class WeatherHourlyComponent {
  @Input() weatherHourly: WeatherReadingHourly[] | undefined;
  @Input() geolocation: Geolocation | undefined;

  get weatherHour(): WeatherReadingHourly | undefined {
    //TODO Instead of using '0', fetch the actual index from the store
    return this.weatherHourly ? this.weatherHourly[0] : undefined;
  }
}
