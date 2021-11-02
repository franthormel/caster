import { TestBed } from '@angular/core/testing';

import { WeatherStateManagerService } from './weather-state-manager.service';

describe('WeatherStateManagerService', () => {
  let service: WeatherStateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherStateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
