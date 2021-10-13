import { Component, Input } from '@angular/core';

import { Geolocation } from '../../models/geolocation/geolocation.models';

@Component({
  selector: 'app-weather-content-top-left',
  templateUrl: './weather-content-top-left.component.html',
  styleUrls: ['./weather-content-top-left.component.css'],
})
export class WeatherContentTopLeftComponent {
  @Input() geolocation: Geolocation | undefined;

  get geolocationDisplay(): string {
    return this.geolocation
      ? `${this.geolocation.name}, ${this.geolocation.country}`
      : '';
  }
}
