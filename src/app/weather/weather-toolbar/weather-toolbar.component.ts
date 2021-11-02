import { Component, Input, Output, EventEmitter } from '@angular/core';

import { StateManagerService } from '../../state-manager.service';

@Component({
  selector: 'app-weather-toolbar',
  templateUrl: './weather-toolbar.component.html',
  styleUrls: ['./weather-toolbar.component.css'],
})
export class WeatherToolbarComponent {
  @Input() alertCount: number = 0;
  @Input() loading: boolean = true;
  @Output() alertEvent = new EventEmitter<void>();

  constructor(public stateManager: StateManagerService) {}

  showAlert() {
    this.alertEvent.emit();
  }
}
