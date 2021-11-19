import { TestBed } from '@angular/core/testing';

import { EpochConverterService } from './epoch-converter.service';

import {
  EPOCH_ALERT,
  EPOCH_ALERT_TIMERANGE_FIREFOX,
  EPOCH_ALERT_TIMERANGE_CHROME,
  EPOCH_INPUTS,
  EPOCH_OUTPUTS_DATE,
  EPOCH_OUTPUTS_DATE_TIME_FIREFOX,
  EPOCH_OUTPUTS_DATE_TIME_CHROME,
  EPOCH_OUTPUTS_TIME_CHROME,
  EPOCH_OUTPUTS_TIME_FIREFOX,
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

  describe('methods()', () => {
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
          const output = service.toTime(input);

          const result =
            output === EPOCH_OUTPUTS_TIME_FIREFOX ||
            output === EPOCH_OUTPUTS_TIME_CHROME;

          expect(result).toBeTruthy();
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
          const output = service.toDateTime(input);

          const expected_firefox = EPOCH_OUTPUTS_DATE_TIME_FIREFOX[i];
          const expected_chrome = EPOCH_OUTPUTS_DATE_TIME_CHROME[i];
          const result =
            output === expected_firefox || output === expected_chrome;

          expect(result).toBeTruthy();
        }
      });
    });

    describe('toTimerange()', () => {
      it('should return a value of String type', () => {
        const result = service.toTimerange(EPOCH_ALERT);

        expect(result).toBeInstanceOf(String);
      });

      it('should return the expected value', () => {
        const output = service.toTimerange(EPOCH_ALERT);

        const result =
          output === EPOCH_ALERT_TIMERANGE_FIREFOX ||
          output === EPOCH_ALERT_TIMERANGE_CHROME;

        expect(result).toBeTruthy();
      });
    });

    // TODO
    pending('displayDateTime');
  });
});
