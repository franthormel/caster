import { Component, Input } from '@angular/core';

import { WeatherAlert } from '../../../models/weather/weather-alert.models';
import { StringManagerService } from '../../shared/services/string-manager.service';

@Component({
  selector: 'app-weather-alert-content',
  templateUrl: './weather-alert-content.component.html',
  styleUrls: ['./weather-alert-content.component.css'],
})
export class WeatherAlertContentComponent {
  @Input() alert!: WeatherAlert;

  constructor(public stringManager: StringManagerService) {}

  get alertLines(): string[] {
    return this.alert.description.split('\r\n');
  }
}
