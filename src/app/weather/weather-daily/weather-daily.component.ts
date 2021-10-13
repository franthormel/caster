import { Component, Input } from '@angular/core';

import { WeatherReadingDaily } from '../../models/weather/weather-reading-daily.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';

@Component({
  selector: 'app-weather-daily',
  templateUrl: './weather-daily.component.html',
  styleUrls: ['./weather-daily.component.css'],
})
export class WeatherDailyComponent {
  @Input() weatherDay: WeatherReadingDaily[] | undefined;
  @Input() geolocation: Geolocation | undefined;
}
