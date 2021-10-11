import { Component, Input } from '@angular/core';
import { WeatherAlert } from 'src/app/models/weather/weather-alert.models';
import { EpochConverterService } from '../epoch-converter.service';

@Component({
  selector: 'app-weather-alert-content',
  templateUrl: './weather-alert-content.component.html',
  styleUrls: ['./weather-alert-content.component.css'],
})
export class WeatherAlertContentComponent {
  @Input() alert!: WeatherAlert;
  @Input() showAlertTimeRange: boolean = true;

  constructor(private epochConverter: EpochConverterService) {}

  get timeDescription(): string {
    return this.epochConverter.alertTimeRange(this.alert);
  }

  /**
   * Formats the raw text to an
   * array of strings to be easily read
   */
  descriptionLines(alert: WeatherAlert): string[] {
    return alert.description.split('\r\n');
  }
}
