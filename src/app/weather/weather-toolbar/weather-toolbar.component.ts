import { Component, Input, Output, EventEmitter } from '@angular/core';

import { WeatherStateManagerService } from '../weather-state-manager.service';

@Component({
  selector: 'app-weather-toolbar',
  templateUrl: './weather-toolbar.component.html',
  styleUrls: ['./weather-toolbar.component.css'],
})
export class WeatherToolbarComponent {
  @Input() alertCount: number = 0;
  @Input() loading: boolean = true;
  @Output() alertEvent = new EventEmitter<void>();

  constructor(public weatherStateManager: WeatherStateManagerService) {}

  showAlert() {
    this.alertEvent.emit();
  }
}
