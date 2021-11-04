import { TestBed } from '@angular/core/testing';

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
    // TODO Move to test data
    const inputs = [-240, -229, -112, 83, 298, 336];
    const outputs = [-513.15, -502.15, -385.15, -190.15, 24.85, 62.85];

    it('should return a value of Number type', () => {
      const result = service.convertKelvinToCelsius(0);

      expect(result).toBeInstanceOf(Number);
    });

    describe('test values', () => {
      it('should have the same lengths', () => {
        expect(inputs.length).toBe(outputs.length);
      });
    });

    for (const i in inputs) {
      const kelvin = inputs[i];
      const celsius = Math.round(outputs[i]);

      it(`should return the expected value if kelvin is ${kelvin}`, () => {
        const result = service.convertKelvinToCelsius(kelvin);

        expect(result).toBe(celsius);
      });
    }
  });
});
