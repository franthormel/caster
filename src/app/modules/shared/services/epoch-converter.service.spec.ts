import { TestBed } from '@angular/core/testing';

import { EpochConverterService } from './epoch-converter.service';

import {
  EPOCH_ALERT,
  EPOCH_ALERT_TIMERANGE,
  EPOCH_INPUTS,
  EPOCH_OUTPUTS_DATE,
  EPOCH_OUTPUTS_DATE_TIME,
  EPOCH_OUTPUTS_TIME,
} from './tests/services/epoch-converter.testing';

describe('EpochConverterService', () => {
  let service: EpochConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpochConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('convertToDate()', () => {
    it('should return a value of Date type', () => {
      const result = service.convertToDate(0);

      expect(result).toBeInstanceOf(Date);
    });

    it('should return the expected value', () => {
      for (const i in EPOCH_INPUTS) {
        const input = EPOCH_INPUTS[i];
        const output = EPOCH_OUTPUTS_DATE[i];

        const expected = new Date(output);
        const result = service.convertToDate(input);

        expect(result).toEqual(expected);
      }
    });
  });

  describe('convertToTime()', () => {
    it('should return a value of String type', () => {
      const result = service.convertToTime(0);

      expect(result).toBeInstanceOf(String);
    });

    it('should return the expected value', () => {
      for (const i in EPOCH_INPUTS) {
        const input = EPOCH_INPUTS[i];

        const expected = EPOCH_OUTPUTS_TIME[i];
        const result = service.convertToTime(input);

        expect(result).toBe(expected);
      }
    });
  });

  describe('convertToDateTime()', () => {
    it('should return a value of String type', () => {
      const result = service.convertToDateTime(0);

      expect(result).toBeInstanceOf(String);
    });

    it('should return the expected locale date time value', () => {
      for (const i in EPOCH_INPUTS) {
        const input = EPOCH_INPUTS[i];

        const expected = EPOCH_OUTPUTS_DATE_TIME[i];
        const result = service.convertToDateTime(input);

        expect(result).toBe(expected);
      }
    });
  });

  describe('convertToTimerange()', () => {
    it('should return a value of String type', () => {
      const result = service.convertToTimerange(EPOCH_ALERT);

      expect(result).toBeInstanceOf(String);
    });

    it('should return the expected value', () => {
      const result = service.convertToTimerange(EPOCH_ALERT);

      expect(result).toBe(EPOCH_ALERT_TIMERANGE);
    });
  });

  describe('offsetDays()', () => {
    const dailySeconds = 8.64e4;
    const point = 8683200;
    const yesterday = point - dailySeconds;
    const tomorrow = point + dailySeconds;

    it('should return a value of Number type', () => {
      const result = service.offsetDays(point, point);

      expect(result).toBeInstanceOf(Number);
    });

    describe('should return 0', () => {
      it('if compare is the first boundary', () => {
        const compareFirst = computeFirstSecondOfTheDay(point);
        const result = service.offsetDays(point, compareFirst);

        expect(result).toBe(0);
      });

      it('if compare is equal to point', () => {
        const result = service.offsetDays(point, point);

        expect(result).toBe(0);
      });

      it('if compare is the last boundary', () => {
        const compareLast = computerLastSecondOfTheDay(point);
        const result = service.offsetDays(point, compareLast);

        expect(result).toBe(0);
      });
    });

    describe('should return -1', () => {
      it('if compare is the first boundary', () => {
        const compareFirst = computeFirstSecondOfTheDay(tomorrow);
        const result = service.offsetDays(point, compareFirst);

        expect(result).toBe(-1);
      });

      it('if compare is the last boundary', () => {
        const compareLast = computerLastSecondOfTheDay(tomorrow);
        const result = service.offsetDays(point, compareLast);

        expect(result).toBe(-1);
      });
    });

    describe('should return 1', () => {
      it('if compare is the first boundary', () => {
        const compareFirst = computeFirstSecondOfTheDay(yesterday);
        const result = service.offsetDays(point, compareFirst);

        expect(result).toBe(1);
      });

      it('if compare is the last boundary', () => {
        const compareLast = computerLastSecondOfTheDay(yesterday);
        const result = service.offsetDays(point, compareLast);

        expect(result).toBe(1);
      });
    });

    function computeFirstSecondOfTheDay(seconds: number): number {
      return Math.floor(seconds / dailySeconds) * dailySeconds;
    }

    function computerLastSecondOfTheDay(seconds: number): number {
      return Math.ceil(seconds / dailySeconds) * dailySeconds - 1;
    }
  });
});
