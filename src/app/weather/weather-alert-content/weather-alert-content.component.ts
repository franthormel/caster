import { Component, Input } from '@angular/core';

import { WeatherAlert } from '../../models/weather/weather-alert.models';

@Component({
  selector: 'app-weather-alert-content',
  templateUrl: './weather-alert-content.component.html',
  styleUrls: ['./weather-alert-content.component.css'],
})
export class WeatherAlertContentComponent {
  @Input() alert!: WeatherAlert;
  @Input() showAlertTimeRange: boolean = true;

  get alertLines(): string[] {
    return this.alert.description.split('\r\n');
  }

  lineIsCapitalized(line: string): boolean {
    return line === line.toUpperCase();
  }
}
