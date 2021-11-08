import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { WeatherAlertComponent } from './weather-alert.component';
import { WeatherAlertMultipleComponent } from '../weather-alert-multiple/weather-alert-multiple.component';
import { WeatherAlertSingleComponent } from '../weather-alert-single/weather-alert-single.component';
import { EpochConverterService } from '../../../epoch-converter.service';

import {
  WEATHER_ALERT,
  WEATHER_ALERTS,
  WEATHER_ALERT_TITLE_MULTIPLE_OR_EMPTY,
  WEATHER_ALERT_TITLE_SINGLE,
} from '../../../tests/weather.testing';

describe('WeatherAlertComponent', () => {
  let component: WeatherAlertComponent;
  let fixture: ComponentFixture<WeatherAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherAlertComponent,
        WeatherAlertSingleComponent,
        WeatherAlertMultipleComponent,
      ],
      imports: [MatDialogModule],
      providers: [
        EpochConverterService,
        {
          provide: MAT_DIALOG_DATA,
          useValue: WEATHER_ALERTS,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('methods', () => {
    describe('title()', () => {
      it('should return a String value', () => {
        const result = component.title;

        expect(result).toBeInstanceOf(String);
      });

      it('should return expected value if alerts is empty', () => {
        setToNoAlerts();
        const expected = WEATHER_ALERT_TITLE_MULTIPLE_OR_EMPTY;
        const result = component.title;

        expect(result).toBe(expected);
      });

      it('should return expected value if there is a single alert', () => {
        setToSingleAlert();
        const expected = WEATHER_ALERT_TITLE_SINGLE;
        const result = component.title;

        expect(result).toBe(expected);
      });

      it('should return expected value if there are multiple alerts', () => {
        setToMultipleAlerts();
        const expected = WEATHER_ALERT_TITLE_MULTIPLE_OR_EMPTY;
        const result = component.title;

        expect(result).toBe(expected);
      });
    });

    describe('singleAlert()', () => {
      it('should return a Boolean value', () => {
        const result = component.singleAlert;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return false if there are multiple alerts', () => {
        setToMultipleAlerts();
        const result = component.singleAlert;

        expect(result).toBeFalsy();
      });

      it('should return false if alerts is empty', () => {
        setToNoAlerts();
        const result = component.singleAlert;

        expect(result).toBeFalsy();
      });

      it('should return true if there is a single alert', () => {
        setToSingleAlert();
        const result = component.singleAlert;

        expect(result).toBeTruthy();
      });
    });
  });

  function setToNoAlerts() {
    component.alerts = [];
  }

  function setToSingleAlert() {
    component.alerts = [WEATHER_ALERT];
  }

  function setToMultipleAlerts() {
    component.alerts = [WEATHER_ALERT, WEATHER_ALERT];
  }
});
