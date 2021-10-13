import { Component, Input } from '@angular/core';

import { WeatherReadingCurrent } from '../../models/weather/weather-reading-current.models';
import { WeatherReadingDaily } from '../../models/weather/weather-reading-daily.models';
import { WeatherReadingHourly } from '../../models/weather/weather-reading-hourly.models';
import { WeatherReadingMinutely } from '../../models/weather/weather-reading-minutely.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';

@Component({
  selector: 'app-weather-content-top',
  templateUrl: './weather-content-top.component.html',
  styleUrls: ['./weather-content-top.component.css'],
})
export class WeatherContentTopComponent {
  @Input() weatherCurrent: WeatherReadingCurrent | undefined;
  @Input() weatherMinutely: WeatherReadingMinutely[] | undefined;
  @Input() weatherHourly: WeatherReadingHourly | undefined;
  @Input() weatherDaily: WeatherReadingDaily | undefined;
  @Input() geolocation: Geolocation | undefined;
}
