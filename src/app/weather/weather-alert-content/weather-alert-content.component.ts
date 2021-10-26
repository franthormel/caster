import { Component, Input } from '@angular/core';

import { WeatherAlert } from '../../models/weather/weather-alert.models';
import { StringParserService } from '../../shared/string-parser.service';

@Component({
  selector: 'app-weather-alert-content',
  templateUrl: './weather-alert-content.component.html',
  styleUrls: ['./weather-alert-content.component.css'],
})
export class WeatherAlertContentComponent {
  @Input() alert!: WeatherAlert;
  @Input() showAlertTimeRange: boolean = true;

  constructor(private stringParser: StringParserService) {}

  get alertLines(): string[] {
    return this.alert.description.split('\r\n');
  }

  lineIsUppercased(line: string): boolean {
    return this.stringParser.isUppercase(line);
  }
}
