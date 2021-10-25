import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from '../app-state.reducers';
import { WeatherStateIndexerService } from './weather-state-indexer.service';

describe('WeatherStateIndexerService', () => {
  let service: WeatherStateIndexerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ appState: appStateReducer })],
    });
    service = TestBed.inject(WeatherStateIndexerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('indexHourly()', () => {
    it('should return a number', () => {
      const result = service.indexHourly;

      expect(result).toBeInstanceOf(Number);
    });

    it('should return a number greater than or equal to 0', () => {
      const result = service.indexHourly;

      expect(result).toBeGreaterThanOrEqual(0);
    });
  });

  describe('indexDaily()', () => {
    it('should return a number', () => {
      const result = service.indexDaily;

      expect(result).toBeInstanceOf(Number);
    });

    it('should return a number greater than or equal to 0', () => {
      const result = service.indexDaily;

      expect(result).toBeGreaterThanOrEqual(0);
    });
  });
});
