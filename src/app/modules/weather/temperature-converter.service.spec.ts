import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from '../../app-state.reducers';

import {
  TEMPERATURES_KELVIN,
  TEMPERATURES_CELSIUS,
} from '../../tests/services/temperature-converter.testing';

import { StateManagerService } from '../shared/services/state-manager.service';
import { TemperatureConverterService } from './temperature-converter.service';

describe('TemperatureConverterService', () => {
  let service: TemperatureConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ appState: appStateReducer })],
      providers: [StateManagerService],
    });
    service = TestBed.inject(TemperatureConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('convertTemperature()', () => {
    it('should return a value of Number type', () => {
      const result = service.convertTemperature(0);

      expect(result).toBeInstanceOf(Number);
    });

    // Check the initial state values in app reducers to properly determine
    // which set of expected output values are to be used when testing this spec.
    it('should return the expected value', () => {
      for (const i in TEMPERATURES_KELVIN) {
        const input = TEMPERATURES_KELVIN[i];

        const result = service.convertTemperature(input);
        const expected = TEMPERATURES_CELSIUS[i];

        expect(result).toBe(expected);
      }
    });
  });
});
