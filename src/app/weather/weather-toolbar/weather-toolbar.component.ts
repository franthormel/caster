import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WeatherReadingType } from 'src/app/models/weather/weather.enums';

@Component({
  selector: 'app-weather-toolbar',
  templateUrl: './weather-toolbar.component.html',
  styleUrls: ['./weather-toolbar.component.css'],
})
export class WeatherToolbarComponent {
  @Input() mode: WeatherReadingType | undefined;
  @Output() modeChangeEvent = new EventEmitter<WeatherReadingType>();

  current() {
    this.modeChange(WeatherReadingType.Current);
  }

  hourly() {
    this.modeChange(WeatherReadingType.Hourly);
  }

  daily() {
    this.modeChange(WeatherReadingType.Daily);
  }

  modeChange(value: WeatherReadingType) {
    this.mode = value;
    this.modeChangeEvent.emit(value);
  }
}
