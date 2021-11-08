import { TestBed } from '@angular/core/testing';

import {
  TEMPERATURES_KELVIN,
  TEMPERATURES_CELSIUS,
} from '../../tests/services/temperature-converter.testing';
import { TemperatureConverterService } from './temperature-converter.service';

describe('TemperatureConverterService', () => {
  let service: TemperatureConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('convertKelvinToCelsius()', () => {
    it('should return a value of Number type', () => {
      const result = service.convertKelvinToCelsius(0);

      expect(result).toBeInstanceOf(Number);
    });

    it('should return the expected value', () => {
      for (const i in TEMPERATURES_KELVIN) {
        const kelvin = TEMPERATURES_KELVIN[i];
        const celsius = Math.round(TEMPERATURES_CELSIUS[i]);

        const result = service.convertKelvinToCelsius(kelvin);

        expect(result).toBe(celsius);
      }
    });
  });
});
