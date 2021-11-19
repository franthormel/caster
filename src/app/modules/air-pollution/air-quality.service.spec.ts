import { TestBed } from '@angular/core/testing';

import { AirQualityService } from './air-quality.service';
import {
  AIR_QUALITY_INPUTS,
  AIR_QUALITY_OUTPUTS,
} from '../../tests/services/air-quality.testing';

describe('AirQualityService', () => {
  let service: AirQualityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirQualityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('methods()', () => {
    describe('describe()', () => {
      it('should return a string', () => {
        const result = service.describe(0);

        expect(result).toBeInstanceOf(String);
      });

      it('should return expected value', () => {
        for(const i in AIR_QUALITY_INPUTS) {
          const input = AIR_QUALITY_INPUTS[i];
          const expected = AIR_QUALITY_OUTPUTS[i];
          
          const result = service.describe(input);
          
          expect(result).toBe(expected);
        }
      });
    });
  });
});
