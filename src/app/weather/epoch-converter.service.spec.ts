import { TestBed } from '@angular/core/testing';

import { EpochConverterService } from './epoch-converter.service';

describe('EpochConverterService', () => {
  let service: EpochConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpochConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
