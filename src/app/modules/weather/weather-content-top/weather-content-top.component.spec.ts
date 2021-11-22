import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { EpochConverterService } from '../../shared/services/epoch-converter.service';
import { MoonPhaseService } from '../moon-phase.service';
import { StateManagerService } from '../../shared/services/state-manager.service';
import { WeatherContentTopComponent } from './weather-content-top.component';

import { appStateReducer } from '../../../app-state.reducers';

import {
  WEATHER_ALERT,
  WEATHER_ALERT_BUTTON_TEXT_MULTIPLE,
  WEATHER_ALERT_BUTTON_TEXT_SINGLE,
  WEATHER_ALERT_BUTTON_TOOLTIP_MULTIPLE,
  WEATHER_ALERT_BUTTON_TOOLTIP_SINGLE,
  WEATHER_DATA,
} from '../../../tests/weather.testing';

describe('WeatherContentTopComponent', () => {
  let component: WeatherContentTopComponent;
  let fixture: ComponentFixture<WeatherContentTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherContentTopComponent],
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({ appState: appStateReducer }),
        MatDialogModule,
        MatMenuModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
      ],
      providers: [EpochConverterService, MoonPhaseService, StateManagerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentTopComponent);
    component = fixture.componentInstance;
    component.weatherData = WEATHER_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('weatherData', () => {
      it('should return a WeatherData', () => {
        const result = component.weatherData;

        expect(result).toBeInstanceOf(Object);
      });
    });
  });

  describe('methods', () => {
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

    describe('hourlyPrevious()', () => {
      beforeEach(() => {
        spyOn(component, 'hourlyPrevious');

        component.hourlyPrevious();
      });

      it('should be called when invoked', () => {
        expect(component.hourlyPrevious).toHaveBeenCalled();
      });
    });

    describe('hourlyNext()', () => {
      beforeEach(() => {
        spyOn(component, 'hourlyNext');

        component.hourlyNext();
      });

      it('should be called when invoked', () => {
        expect(component.hourlyNext).toHaveBeenCalled();
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

    describe('alertsCount()', () => {
      it('should return a Number', () => {
        const result = component.alertsCount;

        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('alertsAreAvailable()', () => {
      it('should return a Boolean', () => {
        const result = component.alertsAreAvailable;

        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('showAlertDialog()', () => {
      beforeEach(() => {
        spyOn(component, 'showAlertDialog');

        component.showAlertDialog();
      });

      it('should be called when invoked', () => {
        expect(component.showAlertDialog).toHaveBeenCalled();
      });
    });

    describe('titleViewMode()', () => {
      it('should return a string', () => {
        const result = component.titleViewMode;

        expect(result).toBeInstanceOf(String);
      });
    });

    describe('alertsButtonText()', () => {
      it('should return a String', () => {
        const result = component.alertsButtonTooltip;

        expect(result).toBeInstanceOf(String);
      });

      it('should return expected value if there is only a single alert', () => {
        component.weatherData.alerts = [WEATHER_ALERT];

        const result = component.alertsButtonText;
        const expected = WEATHER_ALERT_BUTTON_TEXT_SINGLE;

        expect(result).toBe(expected);
      });

      it('should return expected value if there are multiple alerts', () => {
        component.weatherData.alerts = [WEATHER_ALERT, WEATHER_ALERT];

        const result = component.alertsButtonText;
        const expected = WEATHER_ALERT_BUTTON_TEXT_MULTIPLE;

        expect(result).toBe(expected);
      });
    });

    describe('alertsButtonTooltip()', () => {
      it('should return a String', () => {
        const result = component.alertsButtonTooltip;

        expect(result).toBeInstanceOf(String);
      });

      it('should return expected value if there is only a single alert', () => {
        component.weatherData.alerts = [WEATHER_ALERT];

        const result = component.alertsButtonTooltip;
        const expected = WEATHER_ALERT_BUTTON_TOOLTIP_SINGLE;

        expect(result).toBe(expected);
      });

      it('should return expected value if there are multiple alerts', () => {
        component.weatherData.alerts = [WEATHER_ALERT, WEATHER_ALERT];

        const result = component.alertsButtonTooltip;
        const expected = WEATHER_ALERT_BUTTON_TOOLTIP_MULTIPLE;

        expect(result).toBe(expected);
      });
    });
  });
});
