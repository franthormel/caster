import { Component, Input, Output, EventEmitter } from '@angular/core';

import { WeatherModeService } from '../weather-mode.service';

@Component({
  selector: 'app-weather-toolbar',
  templateUrl: './weather-toolbar.component.html',
  styleUrls: ['./weather-toolbar.component.css'],
})
export class WeatherToolbarComponent {
  @Input() alertCount: number = 0;
  @Input() loading: boolean = true;
  @Output() alertEvent = new EventEmitter<void>();

  constructor(public weatherMode: WeatherModeService) {}

  showAlert() {
    this.alertEvent.emit();
  }
}
