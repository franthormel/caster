import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { appStateReducer } from '../app-state.reducers';
import { WeatherDataService } from './weather-data.service';

describe('WeatherDataService', () => {
  let service: WeatherDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ appState: appStateReducer }),
      ],
    });
    service = TestBed.inject(WeatherDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('localFileWeather()', () => {
    it('should return an Observable when called', () => {
      const result = service.localFileWeather();

      expect(result).toBeInstanceOf(Observable);
    });
  });

  describe('localFileGeolocation()', () => {
    it('should return an Observable when called', () => {
      const result = service.localFileGeolocation();

      expect(result).toBeInstanceOf(Observable);
    });
  });
});
