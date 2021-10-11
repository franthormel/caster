import { Component, Input } from '@angular/core';
import { WeatherReadingCurrent } from '../../models/weather/weather-reading-current.models';
import { WeatherReadingMinutely } from '../../models/weather/weather-reading-minutely.models';

@Component({
  selector: 'app-weather-current',
  templateUrl: './weather-current.component.html',
  styleUrls: ['./weather-current.component.css'],
})
export class WeatherCurrentComponent {
  @Input() weatherCurrent : WeatherReadingCurrent | undefined;
  @Input() weatherMinutely : WeatherReadingMinutely[] | undefined;
}
