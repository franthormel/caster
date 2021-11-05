import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { WeatherAlertComponent } from './weather-alert.component';
import { WeatherAlertMultipleComponent } from '../weather-alert-multiple/weather-alert-multiple.component';
import { WeatherAlertSingleComponent } from '../weather-alert-single/weather-alert-single.component';
import { EpochConverterService } from '../../epoch-converter.service';

import {
  TEST_WEATHER_ALERT,
  TEST_WEATHER_ALERTS,
  TEST_WEATHER_ALERT_TITLE_MULTIPLE_OR_EMPTY,
  TEST_WEATHER_ALERT_TITLE_SINGLE,
} from '../../../assets/data/testing/weather.testing';

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
          useValue: TEST_WEATHER_ALERTS,
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
        const expected = TEST_WEATHER_ALERT_TITLE_MULTIPLE_OR_EMPTY;
        const result = component.title;

        expect(result).toBe(expected);
      });

      it('should return expected value if there is a single alert', () => {
        setToSingleAlert();
        const expected = TEST_WEATHER_ALERT_TITLE_SINGLE;
        const result = component.title;

        expect(result).toBe(expected);
      });

      it('should return expected value if there are multiple alerts', () => {
        setToMultipleAlerts();
        const expected = TEST_WEATHER_ALERT_TITLE_MULTIPLE_OR_EMPTY;
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
    component.alerts = [TEST_WEATHER_ALERT];
  }

  function setToMultipleAlerts() {
    component.alerts = [TEST_WEATHER_ALERT, TEST_WEATHER_ALERT];
  }
});
