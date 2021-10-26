import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { WeatherAlert } from '../../models/weather/weather-alert.models';
import { WeatherAlertComponent } from './weather-alert.component';
import { WeatherAlertMultipleComponent } from '../weather-alert-multiple/weather-alert-multiple.component';
import { WeatherAlertSingleComponent } from '../weather-alert-single/weather-alert-single.component';
import { EpochConverterService } from '../../shared/epoch-converter.service';

describe('WeatherAlertComponent', () => {
  let component: WeatherAlertComponent;
  let fixture: ComponentFixture<WeatherAlertComponent>;
  const alert: WeatherAlert = {
    sender_name: 'Weather Association',
    event: 'Heavy rainfall',
    start: 1634701533,
    end: 1635043882,
    description: '',
    tags: [],
  };

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
          useValue: [alert],
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

  describe('title()', () => {
    it('should return a String vale', () => {
      const result = component.title;

      expect(result).toBeInstanceOf(String);
    });

    it('should return expected value', () => {
      const expected =
        'Heavy rainfall from Weather Association (20/10/2021 11:45:33 am — 24/10/2021 10:51:22 am)';
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
