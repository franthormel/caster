import { Component, Input } from '@angular/core';

import { WeatherReadingCurrent } from '../../models/weather/weather-reading-current.models';
import { WeatherReadingDaily } from '../../models/weather/weather-reading-daily.models';
import { WeatherReadingHourly } from '../../models/weather/weather-reading-hourly.models';
import { WeatherReadingMinutely } from '../../models/weather/weather-reading-minutely.models';

import { WeatherModeService } from '../weather-mode.service';

@Component({
  selector: 'app-weather-content-top-right',
  templateUrl: './weather-content-top-right.component.html',
  styleUrls: ['./weather-content-top-right.component.css'],
})
export class WeatherContentTopRightComponent {
  @Input() weatherCurrent: WeatherReadingCurrent | undefined;
  @Input() weatherMinutely: WeatherReadingMinutely[] | undefined;
  @Input() weatherHourly: WeatherReadingHourly | undefined;
  @Input() weatherDaily: WeatherReadingDaily | undefined;

  constructor(public weatherModeService: WeatherModeService) {}
}
