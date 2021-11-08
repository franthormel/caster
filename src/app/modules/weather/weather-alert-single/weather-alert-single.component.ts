import { Component, Input } from '@angular/core';

import { WeatherAlert } from '../../../models/weather/weather-alert.models';

@Component({
  selector: 'app-weather-alert-single',
  templateUrl: './weather-alert-single.component.html',
  styleUrls: ['./weather-alert-single.component.css'],
})
export class WeatherAlertSingleComponent {
  @Input() alert!: WeatherAlert;
}
