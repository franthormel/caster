import { Component, Input } from '@angular/core';
import { WeatherAlert } from 'src/app/models/weather/weather-alert.models';

@Component({
  selector: 'app-weather-alert-multiple',
  templateUrl: './weather-alert-multiple.component.html',
  styleUrls: ['./weather-alert-multiple.component.css'],
})
export class WeatherAlertMultipleComponent {
  @Input() alerts!: WeatherAlert[];

  /**
   * Converts Epoch to UTC string
   * @param time UTC seconds
   * @returns UTC string
   */
  convertTime(time: number): string {
    const date = new Date(time * 1000);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  }
}
