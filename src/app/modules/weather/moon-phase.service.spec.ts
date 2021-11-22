import { TestBed } from '@angular/core/testing';

import { ICONS_MOON } from '../../data/icons/moon.data';
import { DESCRIPTIONS } from '../../data/descriptions/moon.data';
import {
  MOON_INPUTS,
  MOON_OUTPUTS,
} from '../../tests/services/moon-phase.testing';

import { MoonPhaseService } from './moon-phase.service';

describe('MoonPhaseService', () => {
  let service: MoonPhaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoonPhaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('description()', () => {
    it('should return a value of String type', () => {
      const result = service.description(0);

      expect(result).toBeInstanceOf(String);
    });

    it('should return the expected value', () => {
      for (const i in MOON_INPUTS) {
        const input = MOON_INPUTS[i];
        const output = MOON_OUTPUTS[i];

        const result = service.description(input);
        const expected = DESCRIPTIONS[output];

        expect(result).toBe(expected);
      }
    });
  });

  describe('icon()', () => {
    it('should return a value of String type', () => {
      const result = service.icon(0);

      expect(result).toBeInstanceOf(String);
    });

    it('should return the expected value', () => {
      for (const i in MOON_INPUTS) {
        const input = MOON_INPUTS[i];
        const output = MOON_OUTPUTS[i];

        const result = service.icon(input);
        const expected = ICONS_MOON[output];

        expect(result).toBe(expected);
      }
    });
  });
});
