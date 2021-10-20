import { TestBed } from '@angular/core/testing';

import { WeatherStateIndexerService } from './weather-state-indexer.service';

describe('WeatherStateIndexerService', () => {
  let service: WeatherStateIndexerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherStateIndexerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
