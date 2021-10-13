import { Component, Input, Output, EventEmitter } from '@angular/core';

import { WeatherModeService } from '../weather-mode.service';

@Component({
  selector: 'app-weather-toolbar',
  templateUrl: './weather-toolbar.component.html',
  styleUrls: ['./weather-toolbar.component.css'],
})
export class WeatherToolbarComponent {
  @Input() alertCount: number | undefined = 0;
  @Input() loading: boolean | undefined = true;
  @Output() alertEvent = new EventEmitter<void>();

  constructor(public weatherModeService: WeatherModeService) {}

  showAlert() {
    this.alertEvent.emit();
  }
}
