import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherAlert } from 'src/app/models/weather/weather-alert.models';

@Component({
  selector: 'app-weather-alert',
  templateUrl: './weather-alert.component.html',
  styleUrls: ['./weather-alert.component.css'],
})
export class WeatherAlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public alerts: WeatherAlert[]) {}

  /**
   * If there are multiple alerts use a generic title
   * Otherwise, use the single alert's event and sender's name
   */
  get title(): string {
    if (!this.multipleAlerts) {
      const alert = this.alerts[0];
      return `${alert.event} from ${alert.sender_name}`;
    }
    return 'Weather Alerts';
  }

  /**
   * Used to determine which type of
   * component will be used when displaying
   * alert(s) as a `mat-dialog-content`
   */
  get multipleAlerts(): boolean {
    return this.alerts.length > 1;
  }
}
