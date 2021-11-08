import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from '../../../app-state.reducers';
import { StateManagerService } from './state-manager.service';

describe('StateManagerService', () => {
  let service: StateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ appState: appStateReducer }),
      ],
    });
    service = TestBed.inject(StateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('methods()', () => {

    describe('indexHourly()', () => {
      it('should return a number', () => {
        const result = service.indexHourly;

        expect(result).toBeInstanceOf(Number);
      });

      it('should return a number greater than or equal to 0', () => {
        const result = service.indexHourly;

        expect(result).toBeGreaterThanOrEqual(0);
      });

      it('should return expected value after initialization', () => {
        const expected = 0;
        const result = service.indexHourly;

        expect(result).toBe(expected);
      });
    });

    describe('indexDaily()', () => {
      it('should return a number', () => {
        const result = service.indexDaily;

        expect(result).toBeInstanceOf(Number);
      });

      it('should return a number greater than or equal to 0', () => {
        const result = service.indexDaily;

        expect(result).toBeGreaterThanOrEqual(0);
      });

      it('should return expected value after initialization', () => {
        const expected = 0;
        const result = service.indexDaily;

        expect(result).toBe(expected);
      });
    });

    describe('indexHourlyIncrement()', () => {
      it('should increase value once if called once', () => {
        service.indexHourlyIncrement();

        const expected = 1;
        const result = service.indexHourly;

        expect(result).toBe(expected);
      });

      it('should increase value twice if called twice', () => {
        service.indexHourlyIncrement();
        service.indexHourlyIncrement();

        const expected = 2;
        const result = service.indexHourly;

        expect(result).toBe(expected);
      });

      it('should increase value thrice if called thrice', () => {
        service.indexHourlyIncrement();
        service.indexHourlyIncrement();
        service.indexHourlyIncrement();

        const expected = 3;
        const result = service.indexHourly;

        expect(result).toBe(expected);
      });
    });

    describe('indexHourlyDecrement()', () => {
      it('should decrease value once if called once', () => {
        service.indexHourlyIncrement();
        service.indexHourlyDecrement();

        const expected = 0;
        const result = service.indexHourly;

        expect(result).toBe(expected);
      });

      it('should decrease value twice if called twice', () => {
        service.indexHourlyIncrement();
        service.indexHourlyIncrement();
        service.indexHourlyDecrement();
        service.indexHourlyDecrement();

        const expected = 0;
        const result = service.indexHourly;

        expect(result).toBe(expected);
      });

      it('should decrease value thrice if called thrice', () => {
        service.indexHourlyIncrement();
        service.indexHourlyIncrement();
        service.indexHourlyIncrement();
        service.indexHourlyDecrement();
        service.indexHourlyDecrement();
        service.indexHourlyDecrement();

        const expected = 0;
        const result = service.indexHourly;

        expect(result).toBe(expected);
      });
    });

    describe('indexDailyIncrement()', () => {
      it('should increase value once if called once', () => {
        service.indexDailyIncrement();

        const expected = 1;
        const result = service.indexDaily;

        expect(result).toBe(expected);
      });

      it('should increase value twice if called twice', () => {
        service.indexDailyIncrement();
        service.indexDailyIncrement();

        const expected = 2;
        const result = service.indexDaily;

        expect(result).toBe(expected);
      });

      it('should increase value thrice if called thrice', () => {
        service.indexDailyIncrement();
        service.indexDailyIncrement();
        service.indexDailyIncrement();

        const expected = 3;
        const result = service.indexDaily;

        expect(result).toBe(expected);
      });
    });

    describe('indexDailyDecrement()', () => {
      it('should decrease value once if called once', () => {
        service.indexDailyIncrement();
        service.indexDailyDecrement();

        const expected = 0;
        const result = service.indexDaily;

        expect(result).toBe(expected);
      });

      it('should decrease value twice if called twice', () => {
        service.indexDailyIncrement();
        service.indexDailyIncrement();
        service.indexDailyDecrement();
        service.indexDailyDecrement();

        const expected = 0;
        const result = service.indexDaily;

        expect(result).toBe(expected);
      });

      it('should decrease value thrice if called thrice', () => {
        service.indexDailyIncrement();
        service.indexDailyIncrement();
        service.indexDailyIncrement();
        service.indexDailyDecrement();
        service.indexDailyDecrement();
        service.indexDailyDecrement();

        const expected = 0;
        const result = service.indexDaily;

        expect(result).toBe(expected);
      });
    });

    describe('readingModeIsCurrent()', () => {
      it('should return a Boolean', () => {
        const result = service.readingModeIsCurrent;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeReadingModeToCurrent();
        const result = service.readingModeIsCurrent;

        expect(result).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeReadingModeToDaily();
        service.changeReadingModeToCurrent();
        const result = service.readingModeIsCurrent;

        expect(result).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeReadingModeToDaily();
        const result = service.readingModeIsCurrent;

        expect(result).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeReadingModeToCurrent();
        service.changeReadingModeToHourly();
        const result = service.readingModeIsCurrent;

        expect(result).toBeFalsy();
      });
    });

    describe('readingModeIsHourly()', () => {
      it('should return a Boolean', () => {
        const result = service.readingModeIsHourly;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeReadingModeToHourly();
        const expected = service.readingModeIsHourly;

        expect(expected).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeReadingModeToDaily();
        service.changeReadingModeToHourly();
        const expected = service.readingModeIsHourly;

        expect(expected).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeReadingModeToDaily();
        const expected = service.readingModeIsHourly;

        expect(expected).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeReadingModeToHourly();
        service.changeReadingModeToCurrent();
        const expected = service.readingModeIsHourly;

        expect(expected).toBeFalsy();
      });
    });

    describe('readingModeIsDaily()', () => {
      it('should return a Boolean', () => {
        const result = service.readingModeIsDaily;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeReadingModeToDaily();
        const expected = service.readingModeIsDaily;

        expect(expected).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeReadingModeToCurrent();
        service.changeReadingModeToDaily();
        const expected = service.readingModeIsDaily;

        expect(expected).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeReadingModeToCurrent();
        const expected = service.readingModeIsDaily;

        expect(expected).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeReadingModeToDaily();
        service.changeReadingModeToHourly();
        const expected = service.readingModeIsDaily;

        expect(expected).toBeFalsy();
      });
    });

    describe('detailModeIsFeelsLike()', () => {
      it('should return a Boolean', () => {
        const result = service.detailModeIsFeelsLike;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeDetailModeToFeelsLike();
        const expected = service.detailModeIsFeelsLike;

        expect(expected).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeDetailModeToTemperature();
        service.changeDetailModeToFeelsLike();
        const expected = service.detailModeIsFeelsLike;

        expect(expected).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeDetailModeToTemperature();
        const expected = service.detailModeIsFeelsLike;

        expect(expected).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeDetailModeToFeelsLike();
        service.changeDetailModeToTemperature();
        const expected = service.detailModeIsFeelsLike;

        expect(expected).toBeFalsy();
      });
    });

    describe('detailModeIsTemperature()', () => {
      it('should return a Boolean', () => {
        const result = service.detailModeIsTemperature;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeDetailModeToTemperature();
        const expected = service.detailModeIsTemperature;

        expect(expected).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeDetailModeToFeelsLike();
        service.changeDetailModeToTemperature();
        const expected = service.detailModeIsTemperature;

        expect(expected).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeDetailModeToFeelsLike();
        const expected = service.detailModeIsTemperature;

        expect(expected).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeDetailModeToTemperature();
        service.changeDetailModeToFeelsLike();
        const expected = service.detailModeIsTemperature;

        expect(expected).toBeFalsy();
      });
    });

    describe('readingMode()', () => {
      it('should return a String', () => {
        const result = service.readingMode;

        expect(result).toBeInstanceOf(String);
      });
    });
  });
});
