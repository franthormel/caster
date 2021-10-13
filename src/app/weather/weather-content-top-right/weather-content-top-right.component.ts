import { Component } from '@angular/core';

import { WeatherModeService } from '../weather-mode.service';

@Component({
  selector: 'app-weather-content-top-right',
  templateUrl: './weather-content-top-right.component.html',
  styleUrls: ['./weather-content-top-right.component.css'],
})
export class WeatherContentTopRightComponent {
  constructor(public weatherModeService: WeatherModeService) {}
}
