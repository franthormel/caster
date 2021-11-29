import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from '../../../app-state.reducers';
import { SettingsTemperature, SettingsTheme } from '../../../models/settings.enums';
import { StateManagerService } from './state-manager.service';

describe('StateManagerService', () => {
  let service: StateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ appState: appStateReducer })],
    });
    service = TestBed.inject(StateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('methods()', () => {
    describe('indexHourly()', () => {
      it('should return a number', () => {
        const result = service.weatherIndexHourly;

        expect(result).toBeInstanceOf(Number);
      });

      it('should return a number greater than or equal to 0', () => {
        const result = service.weatherIndexHourly;

        expect(result).toBeGreaterThanOrEqual(0);
      });

      it('should return expected value after initialization', () => {
        const expected = 0;
        const result = service.weatherIndexHourly;

        expect(result).toBe(expected);
      });
    });

    describe('indexDaily()', () => {
      it('should return a number', () => {
        const result = service.weatherIndexDaily;

        expect(result).toBeInstanceOf(Number);
      });

      it('should return a number greater than or equal to 0', () => {
        const result = service.weatherIndexDaily;

        expect(result).toBeGreaterThanOrEqual(0);
      });

      it('should return expected value after initialization', () => {
        const expected = 0;
        const result = service.weatherIndexDaily;

        expect(result).toBe(expected);
      });
    });

    describe('indexHourlyIncrement()', () => {
      it('should increase value once if called once', () => {
        service.incrementWeatherIndexHourly();

        const expected = 1;
        const result = service.weatherIndexHourly;

        expect(result).toBe(expected);
      });

      it('should increase value twice if called twice', () => {
        service.incrementWeatherIndexHourly();
        service.incrementWeatherIndexHourly();

        const expected = 2;
        const result = service.weatherIndexHourly;

        expect(result).toBe(expected);
      });

      it('should increase value thrice if called thrice', () => {
        service.incrementWeatherIndexHourly();
        service.incrementWeatherIndexHourly();
        service.incrementWeatherIndexHourly();

        const expected = 3;
        const result = service.weatherIndexHourly;

        expect(result).toBe(expected);
      });
    });

    describe('indexHourlyDecrement()', () => {
      it('should decrease value once if called once', () => {
        service.incrementWeatherIndexHourly();
        service.decrementWeatherIndexHourly();

        const expected = 0;
        const result = service.weatherIndexHourly;

        expect(result).toBe(expected);
      });

      it('should decrease value twice if called twice', () => {
        service.incrementWeatherIndexHourly();
        service.incrementWeatherIndexHourly();
        service.decrementWeatherIndexHourly();
        service.decrementWeatherIndexHourly();

        const expected = 0;
        const result = service.weatherIndexHourly;

        expect(result).toBe(expected);
      });

      it('should decrease value thrice if called thrice', () => {
        service.incrementWeatherIndexHourly();
        service.incrementWeatherIndexHourly();
        service.incrementWeatherIndexHourly();
        service.decrementWeatherIndexHourly();
        service.decrementWeatherIndexHourly();
        service.decrementWeatherIndexHourly();

        const expected = 0;
        const result = service.weatherIndexHourly;

        expect(result).toBe(expected);
      });
    });

    describe('indexDailyIncrement()', () => {
      it('should increase value once if called once', () => {
        service.incrementWeatherIndexDaily();

        const expected = 1;
        const result = service.weatherIndexDaily;

        expect(result).toBe(expected);
      });

      it('should increase value twice if called twice', () => {
        service.incrementWeatherIndexDaily();
        service.incrementWeatherIndexDaily();

        const expected = 2;
        const result = service.weatherIndexDaily;

        expect(result).toBe(expected);
      });

      it('should increase value thrice if called thrice', () => {
        service.incrementWeatherIndexDaily();
        service.incrementWeatherIndexDaily();
        service.incrementWeatherIndexDaily();

        const expected = 3;
        const result = service.weatherIndexDaily;

        expect(result).toBe(expected);
      });
    });

    describe('indexDailyDecrement()', () => {
      it('should decrease value once if called once', () => {
        service.incrementWeatherIndexDaily();
        service.decrementWeatherIndexDaily();

        const expected = 0;
        const result = service.weatherIndexDaily;

        expect(result).toBe(expected);
      });

      it('should decrease value twice if called twice', () => {
        service.incrementWeatherIndexDaily();
        service.incrementWeatherIndexDaily();
        service.decrementWeatherIndexDaily();
        service.decrementWeatherIndexDaily();

        const expected = 0;
        const result = service.weatherIndexDaily;

        expect(result).toBe(expected);
      });

      it('should decrease value thrice if called thrice', () => {
        service.incrementWeatherIndexDaily();
        service.incrementWeatherIndexDaily();
        service.incrementWeatherIndexDaily();
        service.decrementWeatherIndexDaily();
        service.decrementWeatherIndexDaily();
        service.decrementWeatherIndexDaily();

        const expected = 0;
        const result = service.weatherIndexDaily;

        expect(result).toBe(expected);
      });
    });

    describe('readingModeIsCurrent()', () => {
      it('should return a Boolean', () => {
        const result = service.weatherReadingModeIsCurrent;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeWeatherReadingModeToCurrent();
        const result = service.weatherReadingModeIsCurrent;

        expect(result).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeWeatherReadingModeToDaily();
        service.changeWeatherReadingModeToCurrent();
        const result = service.weatherReadingModeIsCurrent;

        expect(result).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeWeatherReadingModeToDaily();
        const result = service.weatherReadingModeIsCurrent;

        expect(result).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeWeatherReadingModeToCurrent();
        service.changeWeatherReadingModeToHourly();
        const result = service.weatherReadingModeIsCurrent;

        expect(result).toBeFalsy();
      });
    });

    describe('readingModeIsHourly()', () => {
      it('should return a Boolean', () => {
        const result = service.weatherReadingModeIsHourly;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeWeatherReadingModeToHourly();
        const expected = service.weatherReadingModeIsHourly;

        expect(expected).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeWeatherReadingModeToDaily();
        service.changeWeatherReadingModeToHourly();
        const expected = service.weatherReadingModeIsHourly;

        expect(expected).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeWeatherReadingModeToDaily();
        const expected = service.weatherReadingModeIsHourly;

        expect(expected).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeWeatherReadingModeToHourly();
        service.changeWeatherReadingModeToCurrent();
        const expected = service.weatherReadingModeIsHourly;

        expect(expected).toBeFalsy();
      });
    });

    describe('readingModeIsDaily()', () => {
      it('should return a Boolean', () => {
        const result = service.weatherReadingModeIsDaily;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeWeatherReadingModeToDaily();
        const expected = service.weatherReadingModeIsDaily;

        expect(expected).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeWeatherReadingModeToCurrent();
        service.changeWeatherReadingModeToDaily();
        const expected = service.weatherReadingModeIsDaily;

        expect(expected).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeWeatherReadingModeToCurrent();
        const expected = service.weatherReadingModeIsDaily;

        expect(expected).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeWeatherReadingModeToDaily();
        service.changeWeatherReadingModeToHourly();
        const expected = service.weatherReadingModeIsDaily;

        expect(expected).toBeFalsy();
      });
    });

    describe('detailModeIsFeelsLike()', () => {
      it('should return a Boolean', () => {
        const result = service.weatherDetailModeIsFeelsLike;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeWeatherDetailModeToFeelsLike();
        const expected = service.weatherDetailModeIsFeelsLike;

        expect(expected).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeWeatherDetailModeToTemperature();
        service.changeWeatherDetailModeToFeelsLike();
        const expected = service.weatherDetailModeIsFeelsLike;

        expect(expected).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeWeatherDetailModeToTemperature();
        const expected = service.weatherDetailModeIsFeelsLike;

        expect(expected).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeWeatherDetailModeToFeelsLike();
        service.changeWeatherDetailModeToTemperature();
        const expected = service.weatherDetailModeIsFeelsLike;

        expect(expected).toBeFalsy();
      });
    });

    describe('detailModeIsTemperature()', () => {
      it('should return a Boolean', () => {
        const result = service.weatherDetailModeIsTemperature;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return true if set to the expected value', () => {
        service.changeWeatherDetailModeToTemperature();
        const expected = service.weatherDetailModeIsTemperature;

        expect(expected).toBeTruthy();
      });

      it('should return true if set to the expected value from another value', () => {
        service.changeWeatherDetailModeToFeelsLike();
        service.changeWeatherDetailModeToTemperature();
        const expected = service.weatherDetailModeIsTemperature;

        expect(expected).toBeTruthy();
      });

      it('should return false if set to another value', () => {
        service.changeWeatherDetailModeToFeelsLike();
        const expected = service.weatherDetailModeIsTemperature;

        expect(expected).toBeFalsy();
      });

      it('should return false if set to another value from expected value', () => {
        service.changeWeatherDetailModeToTemperature();
        service.changeWeatherDetailModeToFeelsLike();
        const expected = service.weatherDetailModeIsTemperature;

        expect(expected).toBeFalsy();
      });
    });

    describe('readingMode()', () => {
      it('should return a String', () => {
        const result = service.weatherReadingMode;

        expect(result).toBeInstanceOf(String);
      });
    });

    describe('locationsFile()', () => {
      it('should return a Number', () => {
        const result = service.locationsFile;

        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('changeLocationsFile()', () => {
      it('should change the expected value accordingly', () => {
        for (const file of [0, 1, 2, 3, 4, 5]) {
          service.changeLocationsFile(file);

          const result = service.locationsFile;
          const expected = file;

          expect(result).toBe(expected);
        }
      });
    });

    describe('settingsTemperature()', () => {
      it('should return a String', () => {
        const result = service.settingsTemperature;

        expect(result).toBeInstanceOf(String);
      });
    });

    describe('changeSettingsTemperature()', () => {
      it('should change the expected value accordingly', () => {
        const temperatures: SettingsTemperature[] = [
          SettingsTemperature.Celsius,
          SettingsTemperature.Fahrenheit,
          SettingsTemperature.Kelvin,
        ];

        for (const temperature of temperatures) {
          service.changeSettingsTemperature(temperature);

          const result = service.settingsTemperature;
          const expected = temperature;

          expect(result).toBe(expected);
        }
      });
    });

    describe('settingsDegreeSign()', () => {
      it('should return a Boolean', () => {
        const result = service.settingsDegreeSign;

        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('settingsToggleDegreeSign()', () => {
      it('should return false after being toggled', () => {
        service.toggleSettingsDegreeSign();

        const result = service.settingsDegreeSign;

        expect(result).toBeFalsy();
      });

      it('should return true after being toggled', () => {
        service.toggleSettingsDegreeSign();
        service.toggleSettingsDegreeSign();

        const result = service.settingsDegreeSign;

        expect(result).toBeTruthy();
      });
    });

    describe('indexAirPollution()', () => {
      it('should return a Number', () => {
        const result = service.airPollutionIndex;

        expect(result).toBeInstanceOf(Number);
      });

      it('should return expected value after calling indexAirPollutionIncrement() once', () => {
        service.incrementAirPollutionIndex();

        const result = service.airPollutionIndex;
        const expected = 1;

        expect(result).toBe(expected);
      });

      it('should return expected value after calling indexAirPollutionIncrement() twice', () => {
        service.incrementAirPollutionIndex();
        service.incrementAirPollutionIndex();

        const result = service.airPollutionIndex;
        const expected = 2;

        expect(result).toBe(expected);
      });

      it('should return expected value after calling indexAirPollutionDecrement() once', () => {
        service.decrementAirPollutionIndex();

        const result = service.airPollutionIndex;
        const expected = 0;

        expect(result).toBe(expected);
      });

      it('should return expected value after calling indexAirPollutionDecrement() twice', () => {
        service.decrementAirPollutionIndex();
        service.decrementAirPollutionIndex();

        const result = service.airPollutionIndex;
        const expected = 0;

        expect(result).toBe(expected);
      });
    });

    describe('changeSettingsTheme()', () => {
      it('should change the expected value accordingly', () => {
        const themes: SettingsTheme[] = [
          SettingsTheme.Light,
          SettingsTheme.Dark,
        ];

        for (const theme of themes) {
          service.changeSettingsTheme(theme);

          const result = service.settingsTheme;
          const expected = theme;

          expect(result).toBe(expected);
        };
      });
    });
  });
});
