import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../app-state.reducers';

@Injectable({
  providedIn: 'root',
})
export class WeatherStateIndexerService {
  appState$!: Observable<AppState>;

  indexHourly!: number;
  indexDaily!: number;

  constructor(private store: Store<{ appState: AppState }>) {
    this.initIndexes();
  }

  initIndexes() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this.indexHourly = state.weatherIndexHourly;
      this.indexDaily = state.weatherIndexDaily;
    });
  }
}
