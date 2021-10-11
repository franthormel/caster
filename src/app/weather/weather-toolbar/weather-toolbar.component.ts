import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WeatherReadingType } from 'src/app/models/weather/weather.enums';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.reducers';
import { weatherModeUpdate } from 'src/app/app-state.actions';
import { WeatherModeService } from '../weather-mode.service';

@Component({
  selector: 'app-weather-toolbar',
  templateUrl: './weather-toolbar.component.html',
  styleUrls: ['./weather-toolbar.component.css'],
})
export class WeatherToolbarComponent implements OnInit {
  @Input() alertCount: number | undefined = 0;
  @Input() loading: boolean | undefined = true;
  @Output() alertEvent = new EventEmitter<void>();

  appState$: Observable<AppState> | undefined;

  mode: WeatherReadingType | undefined;

  constructor(
    private store: Store<{ appState: AppState }>,
    public weatherModeService: WeatherModeService
  ) {}

  ngOnInit() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.mode = state.weatherMode;
    });
  }

  changeToCurrent() {
    this._changeMode(WeatherReadingType.Current);
  }

  changeToHourly() {
    this._changeMode(WeatherReadingType.Hourly);
  }

  changeToDaily() {
    this._changeMode(WeatherReadingType.Daily);
  }

  _changeMode(value: WeatherReadingType) {
    this.store.dispatch(weatherModeUpdate({ mode: value }));
  }

  showAlert() {
    this.alertEvent.emit();
  }
}
