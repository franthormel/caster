import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../app-state.reducers';

@Injectable({
  providedIn: 'root',
})
export class WeatherStateIndexerService {
  private appState$!: Observable<AppState>;
  
  private _indexHourly!: number;
  private _indexDaily!: number;

  constructor(private store: Store<{ appState: AppState }>) {
    this.initIndexes();
  }

  private initIndexes() {
    this.appState$ = this.store.select('appState');

    this.appState$.subscribe((state) => {
      this._indexHourly = state.weatherState.indexHourly;
      this._indexDaily = state.weatherState.indexDaily;
    });
  }

  get indexHourly(): number {
    return this._indexHourly;
  }

  get indexDaily(): number {
    return this._indexDaily;
  }
}
