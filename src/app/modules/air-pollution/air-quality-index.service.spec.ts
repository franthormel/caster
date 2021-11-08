import { TestBed } from '@angular/core/testing';

import { AirQualityIndexService } from './air-quality-index.service';

describe('AirQualityIndexService', () => {
  let service: AirQualityIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirQualityIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
