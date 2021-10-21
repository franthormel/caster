import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { WeatherAlert } from '../../models/weather/weather-alert.models';

@Component({
  selector: 'app-weather-alert',
  templateUrl: './weather-alert.component.html',
  styleUrls: ['./weather-alert.component.css'],
})
export class WeatherAlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public alerts: WeatherAlert[]) {}
  
  get title(): string {
    if (!this.multipleAlerts) {
      const alert = this.alerts[0];
      return `${alert.event} from ${alert.sender_name}`;
    }
    return 'Weather Alerts';
  }

  get multipleAlerts(): boolean {
    return this.alerts.length > 1;
  }
}
