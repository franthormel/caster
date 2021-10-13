import { Component, Input, OnInit } from '@angular/core';

import { WeatherReadingDaily } from '../../models/weather/weather-reading-daily.models';
import { Geolocation } from '../../models/geolocation/geolocation.models';

@Component({
  selector: 'app-weather-daily',
  templateUrl: './weather-daily.component.html',
  styleUrls: ['./weather-daily.component.css'],
})
export class WeatherDailyComponent {
  @Input() weatherDaily: WeatherReadingDaily[] | undefined;
  @Input() geolocation: Geolocation | undefined;

  get weatherDay(): WeatherReadingDaily | undefined {
    //TODO Instead of using '0', fetch the actual index from the store
    return this.weatherDaily ? this.weatherDaily[0] : undefined;
  }
}
