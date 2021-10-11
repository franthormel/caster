import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WeatherReadingType } from 'src/app/models/weather/weather.enums';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { weatherModeChange } from '../weather.actions';
import { WeatherModeState } from '../weather.reducer';

@Component({
  selector: 'app-weather-toolbar',
  templateUrl: './weather-toolbar.component.html',
  styleUrls: ['./weather-toolbar.component.css'],
})
export class WeatherToolbarComponent implements OnInit {
  @Input() alertCount: number | undefined = 0;
  @Input() loading : boolean | undefined = true;
  @Output() alertEvent = new EventEmitter<void>();

  weatherModeState$: Observable<WeatherModeState> | undefined;

  mode: WeatherReadingType | undefined;

  constructor(private store: Store<{ weatherMode: WeatherModeState }>) {}

  ngOnInit() {
    this.weatherModeState$ = this.store.select('weatherMode');

    this.weatherModeState$.subscribe((state) => {
      this.mode = state.mode;
    });
  }

  get isCurrent(): boolean {
    return this.mode === WeatherReadingType.Current;
  }

  get isHourly(): boolean {
    return this.mode === WeatherReadingType.Hourly;
  }

  get isDaily(): boolean {
    return this.mode === WeatherReadingType.Daily;
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
    this.store.dispatch(weatherModeChange({ mode: value }));
  }

  showAlert() {
    this.alertEvent.emit();
  }
}
