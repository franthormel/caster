import { TestBed } from '@angular/core/testing';

import { ICONS_MOON } from '../data/icons/icons-moon.data';
import { DESCRIPTIONS_MOON } from '../data/descriptions/descriptions-moon.data';
import { MoonPhaseService } from './moon-phase.service';

describe('MoonPhaseService', () => {
  let service: MoonPhaseService;

  const inputs = [
    0.09, 0.1, 0.15, 0.17, 0.18, 0.2, 0.25, 0.25, 0.36, 0.6, 0.69, 0.73, 0.75,
    0.78, 0.79, 0.82, 0.91, 0.92, 0.94, 0.97,
  ];
  const outputs = [1, 1, 1, 1, 1, 1, 2, 2, 3, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7, 7];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoonPhaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test values', () => {
    it('should have the same lengths', () => {
      expect(inputs.length).toBe(inputs.length);
    });
  });

  describe('description()', () => {
    it('should return a value of String type', () => {
      const result = service.description(0);

      expect(result).toBeInstanceOf(String);
    });

    for (const i in inputs) {
      const input = inputs[i];
      const output = outputs[i];

      it(`should return the expected String value if moon phase is ${input}`, () => {
        const result = service.description(input);

        expect(result).toBe(DESCRIPTIONS_MOON[output]);
      });
    }
  });

  describe('icon()', () => {
    it('should return a value of String type', () => {
      const result = service.icon(0);

      expect(result).toBeInstanceOf(String);
    });

    for (const i in inputs) {
      const input = inputs[i];
      const output = outputs[i];

      it(`should return the expected String value if moon phase is ${input}`, () => {
        const result = service.icon(input);

        expect(result).toBe(ICONS_MOON[output]);
      });
    }
  });
});
