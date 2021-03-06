import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlertContentComponent } from '../weather-alert-content/weather-alert-content.component';
import { WeatherAlertSingleComponent } from './weather-alert-single.component';

import { WEATHER_ALERT } from '../../../tests/weather.testing';

describe('WeatherAlertSingleComponent', () => {
  let component: WeatherAlertSingleComponent;
  let fixture: ComponentFixture<WeatherAlertSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherAlertSingleComponent, WeatherAlertContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertSingleComponent);
    component = fixture.componentInstance;
    component.alert = WEATHER_ALERT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('alert', () => {
      it('should be a WeatherAlert', () => {
        const result = component.alert;

        expect(result).toBeInstanceOf(Object);
      });
    });
  });
});
