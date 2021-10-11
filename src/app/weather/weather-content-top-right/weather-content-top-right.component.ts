import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-state.reducers';

import { WeatherReadingType } from 'src/app/models/weather/weather.enums';

@Component({
  selector: 'app-weather-content-top-right',
  templateUrl: './weather-content-top-right.component.html',
  styleUrls: ['./weather-content-top-right.component.css'],
})
export class WeatherContentTopRightComponent implements OnInit {
  appState$: Observable<AppState> | undefined;

  mode: WeatherReadingType | undefined;

  constructor(private store: Store<{ appState: AppState }>) {}

  ngOnInit(): void {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((data) => this.mode = data.weatherMode)
  }
}
