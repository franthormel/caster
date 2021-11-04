import { TestBed } from '@angular/core/testing';
import { WeatherAlert } from './models/weather/weather-alert.models';

import { EpochConverterService } from './epoch-converter.service';

describe('EpochConverterService', () => {
  let service: EpochConverterService;

  // TODO: Move to testing data
  const start = 0;
  const today = 1635053215;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpochConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('convertToDate()', () => {
    it('should return a value of Date type', () => {
      const result = service.convertToDate(start);

      expect(result).toBeInstanceOf(Date);
    });

    it(`should return the expected Date value if seconds is ${start}`, () => {
      const expected = new Date(start);
      const result = service.convertToDate(start);

      expect(result).toEqual(expected);
    });

    it(`should return the expected Date value if seconds is ${today}`, () => {
      const expected = new Date(today * 1000);
      const result = service.convertToDate(today);

      expect(result).toEqual(expected);
    });
  });

  describe('convertToTime()', () => {
    it('should return a value of String type', () => {
      const result = service.convertToTime(start);

      expect(result).toBeInstanceOf(String);
    });

    it(`should return the expected locale time value if seconds is ${start}`, () => {
      const date = new Date(start);
      const expected = date.toLocaleTimeString();
      const result = service.convertToTime(start);

      expect(result).toBe(expected);
    });

    it(`should return the expected locale time value if seconds is ${today}`, () => {
      const expected = '1:26:55 pm';
      const result = service.convertToTime(today);

      expect(result).toBe(expected);
    });
  });

  describe('convertToDateTime()', () => {
    it('should return a value of String type', () => {
      const result = service.convertToDateTime(start);

      expect(result).toBeInstanceOf(String);
    });

    it(`should return the expected locale date time value if seconds is ${start}`, () => {
      const expected = '01/01/1970 8:00:00 am';
      const result = service.convertToDateTime(start);

      expect(result).toBe(expected);
    });

    it(`should return the expected locale date time value if seconds is ${today}`, () => {
      const expected = '24/10/2021 1:26:55 pm';
      const result = service.convertToDateTime(today);

      expect(result).toBe(expected);
    });
  });

  describe('convertToTimerange()', () => {
    const alert: WeatherAlert = {
      sender_name: '',
      event: '',
      description: '',
      tags: [],
      start: start,
      end: today,
    };

    it('should return a value of String type', () => {
      const result = service.convertToTimerange(alert);

      expect(result).toBeInstanceOf(String);
    });

    it(`should return the expected value if start is ${start} and end is ${today}`, () => {
      const expected = '01/01/1970 8:00:00 am — 24/10/2021 1:26:55 pm';
      const result = service.convertToTimerange(alert);

      expect(result).toBe(expected);
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
