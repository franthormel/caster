import { Component, Input } from '@angular/core';

import { EpochConverterService } from '../epoch-converter.service';

import { WeatherAlert } from 'src/app/models/weather/weather-alert.models';

@Component({
  selector: 'app-weather-alert-multiple',
  templateUrl: './weather-alert-multiple.component.html',
  styleUrls: ['./weather-alert-multiple.component.css'],
})
export class WeatherAlertMultipleComponent {
  @Input() alerts!: WeatherAlert[];

  constructor(private epochConverter: EpochConverterService) {}

  timeDescription(alert: WeatherAlert): string {
    return this.epochConverter.alertTimeRange(alert);
  }
}
