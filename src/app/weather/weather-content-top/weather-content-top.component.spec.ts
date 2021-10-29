import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from 'src/app/app-state.reducers';
import { WeatherContentTopComponent } from './weather-content-top.component';
import { EpochConverterService } from 'src/app/shared/epoch-converter.service';
import { MoonPhaseService } from '../moon-phase.service';
import { WeatherModeService } from '../weather-mode.service';
import { WeatherStateIndexerService } from '../weather-state-indexer.service';
import { TEST_WEATHER_DATA } from 'src/assets/data/testing/weather.testing';
import { TEST_GEOLOCATION } from 'src/assets/data/testing/services/gelocation.testing';

describe('WeatherContentTopComponent', () => {
  let component: WeatherContentTopComponent;
  let fixture: ComponentFixture<WeatherContentTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherContentTopComponent],
      imports: [StoreModule.forRoot({ appState: appStateReducer })],
      providers: [
        EpochConverterService,
        MoonPhaseService,
        WeatherModeService,
        WeatherStateIndexerService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentTopComponent);
    component = fixture.componentInstance;
    component.weatherData = TEST_WEATHER_DATA;
    component.geolocation = TEST_GEOLOCATION;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('weatherData', () => {
      it('should return a WeatherData', () => {
        const result = component.geolocation;

        expect(result).toBeInstanceOf(Object);
      });
    });

    describe('geolocation', () => {
      it('should return a WeatherGeolocation or undefined', () => {
        const type = typeof component.geolocation;
        const result = type === 'object' || type === 'undefined';

        expect(result).toBeTruthy();
      });
    });
  });

  describe('methods', () => {
    describe('formattedLocation()', () => {
      it('should return a String', () => {
        const result = component.formattedLocation;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('showCurrent()', () => {
      it('should return a Boolean', () => {
        const result = component.showCurrent;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('currentTime()', () => {
      it('should return a String', () => {
        const result = component.currentTime;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('currentTimeSunrise()', () => {
      it('should return a String', () => {
        const result = component.currentTimeSunrise;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('currentTimeSunset()', () => {
      it('should return a String', () => {
        const result = component.currentTimeSunset;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('showHourly()', () => {
      it('should return a Boolean', () => {
        const result = component.showHourly;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('previousHourlyWeather()', () => {
      beforeEach(() => {
        spyOn(component, 'previousHourlyWeather');

        component.previousHourlyWeather();
      });

      it('should be called when invoked', () => {
        expect(component.previousHourlyWeather).toHaveBeenCalled();
      });
    });

    describe('nextHourlyWeather()', () => {
      beforeEach(() => {
        spyOn(component, 'nextHourlyWeather');

        component.nextHourlyWeather();
      });

      it('should be called when invoked', () => {
        expect(component.nextHourlyWeather).toHaveBeenCalled();
      });
    });

    describe('hourlyTime()', () => {
      it('should return a String', () => {
        const result = component.hourlyTime;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('showDaily()', () => {
      it('should return a Boolean', () => {
        const result = component.showDaily;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('dailyTimeSunrise()', () => {
      it('should return a String', () => {
        const result = component.dailyTimeSunrise;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('dailyTimeSunset()', () => {
      it('should return a String', () => {
        const result = component.dailyTimeSunset;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('dailyMoonphaseIcon()', () => {
      it('should return a String', () => {
        const result = component.dailyMoonphaseIcon;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('dailyMoonphase()', () => {
      it('should return a String', () => {
        const result = component.dailyMoonphase;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('dailyTimeMoonrise()', () => {
      it('should return a String', () => {
        const result = component.dailyTimeMoonrise;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('dailyTimeMoonset()', () => {
      it('should return a String', () => {
        const result = component.dailyTimeMoonset;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('dailyPrevious()', () => {
      beforeEach(() => {
        spyOn(component, 'dailyPrevious');

        component.dailyPrevious();
      });

      it('should be called when invoked', () => {
        expect(component.dailyPrevious).toHaveBeenCalled();
      });
    });

    describe('dailyNext()', () => {
      beforeEach(() => {
        spyOn(component, 'dailyNext');

        component.dailyNext();
      });

      it('should be called when invoked', () => {
        expect(component.dailyNext).toHaveBeenCalled();
      });
    });

    describe('dailyTime()', () => {
      it('should return a String', () => {
        const result = component.dailyTime;
        expect(result).toBeInstanceOf(String);
      });
    });
  });
});
