import { Component, Input } from '@angular/core';
import { WeatherAlert } from 'src/app/models/weather/weather-alert.models';

@Component({
  selector: 'app-weather-alert-content',
  templateUrl: './weather-alert-content.component.html',
  styleUrls: ['./weather-alert-content.component.css'],
})
export class WeatherAlertContentComponent {
  @Input() alert!: WeatherAlert;

  /**
   * Converts Epoch to UTC string
   * @param time UTC seconds
   * @returns UTC string
   */
  convertTime(time: number): string {
    return new Date(time * 1000).toUTCString();
  }
}
