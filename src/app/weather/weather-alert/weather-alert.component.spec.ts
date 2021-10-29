import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { WeatherAlertComponent } from './weather-alert.component';
import { WeatherAlertMultipleComponent } from '../weather-alert-multiple/weather-alert-multiple.component';
import { WeatherAlertSingleComponent } from '../weather-alert-single/weather-alert-single.component';
import { EpochConverterService } from '../../shared/epoch-converter.service';

import { TEST_WEATHER_ALERTS } from '../../../assets/data/testing/weather.testing';

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

      it('should return expected value', () => {
        const expected =
          'Tropical Cyclone Alert from PAGASA-DOST (07/10/2021 5:11:08 pm — 08/10/2021 6:10:58 am)';
        const result = component.title;

        expect(result).toBe(expected);
      });
    });

    describe('multipleAlerts()', () => {
      it('should return a Boolean value', () => {
        const result = component.multipleAlerts;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should return expected value', () => {
        const expected = false;
        const result = component.multipleAlerts;

        expect(result).toBe(expected);
      });
    });
  });
});
