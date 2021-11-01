import { Component, Input } from '@angular/core';

import { EpochConverterService } from '../../shared/epoch-converter.service';

import { WeatherAlert } from '../../models/weather/weather-alert.models';

@Component({
  selector: 'app-weather-alert-multiple',
  templateUrl: './weather-alert-multiple.component.html',
  styleUrls: ['./weather-alert-multiple.component.css'],
})
export class WeatherAlertMultipleComponent {
  @Input() alerts!: WeatherAlert[];

  constructor(public epochConverter: EpochConverterService) {}

  isExpanded(i: number): boolean {
    return i === 0;
  }
}
