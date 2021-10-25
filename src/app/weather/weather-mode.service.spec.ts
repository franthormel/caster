import { TestBed } from '@angular/core/testing';

import { WeatherModeService } from './weather-mode.service';

describe('WeatherModeService', () => {
  let service: WeatherModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    // TODO
    pending('WeatherModeService');
  });
});
