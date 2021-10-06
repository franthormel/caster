import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WeatherReadingType } from 'src/app/models/weather/weather.enums';
import { weatherChangeMode } from '../weather.actions';
import { WeatherState } from '../weather.reducer';

@Component({
  selector: 'app-weather-toolbar',
  templateUrl: './weather-toolbar.component.html',
  styleUrls: ['./weather-toolbar.component.css'],
})
export class WeatherToolbarComponent implements OnInit {
  @Input() alertCount : number | undefined;
  @Output() alertEvent = new EventEmitter<void>();
  weatherState$: Observable<WeatherState> | undefined;
  mode: WeatherReadingType | undefined;

  constructor(private store: Store<{ weather: WeatherState }>) {}

  ngOnInit() {
    // Initialize weather state
    this.weatherState$ = this.store.select('weather');

    // Weather mode
    this.weatherState$.subscribe({
      next: (state) => {
        this.mode = state.mode;
      },
      error: (e) => {
        console.error('Weather state error', e);
      },
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
    this.store.dispatch(weatherChangeMode({ mode: value }));
  }

  showAlert() {
    this.alertEvent.emit();
  }
}
