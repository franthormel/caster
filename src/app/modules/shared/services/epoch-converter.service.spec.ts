import { TestBed } from '@angular/core/testing';

import { EpochConverterService } from './epoch-converter.service';

import {
  EPOCH_ALERT,
  EPOCH_ALERT_TIMERANGE,
  EPOCH_INPUTS,
  EPOCH_OUTPUTS_DATE,
  EPOCH_OUTPUTS_DATE_TIME,
  EPOCH_OUTPUTS_TIME,
} from '../../../tests/services/epoch-converter.testing';

describe('EpochConverterService', () => {
  let service: EpochConverterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpochConverterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('toDate()', () => {
    it('should return a value of Date type', () => {
      const result = service.toDate(0);

      expect(result).toBeInstanceOf(Date);
    });

    it('should return the expected value', () => {
      for (const i in EPOCH_INPUTS) {
        const input = EPOCH_INPUTS[i];
        const output = EPOCH_OUTPUTS_DATE[i];

        const expected = new Date(output);
        const result = service.toDate(input);

        expect(result).toEqual(expected);
      }
    });
  });

  describe('toTime()', () => {
    it('should return a value of String type', () => {
      const result = service.toTime(0);

      expect(result).toBeInstanceOf(String);
    });

    it('should return the expected value', () => {
      for (const i in EPOCH_INPUTS) {
        const input = EPOCH_INPUTS[i];

        const expected = EPOCH_OUTPUTS_TIME[i];
        const result = service.toTime(input);

        expect(result).toBe(expected);
      }
    });
  });

  describe('toDateTime()', () => {
    it('should return a value of String type', () => {
      const result = service.toDateTime(0);

      expect(result).toBeInstanceOf(String);
    });

    it('should return the expected locale date time value', () => {
      for (const i in EPOCH_INPUTS) {
        const input = EPOCH_INPUTS[i];

        const expected = EPOCH_OUTPUTS_DATE_TIME[i];
        const result = service.toDateTime(input);

        expect(result).toBe(expected);
      }
    });
  });

  describe('toTimerange()', () => {
    it('should return a value of String type', () => {
      const result = service.toTimerange(EPOCH_ALERT);

      expect(result).toBeInstanceOf(String);
    });

    it('should return the expected value', () => {
      const result = service.toTimerange(EPOCH_ALERT);

      expect(result).toBe(EPOCH_ALERT_TIMERANGE);
    });
  });
});
