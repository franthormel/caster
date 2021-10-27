import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlertContentComponent } from '../weather-alert-content/weather-alert-content.component';
import { WeatherAlertSingleComponent } from './weather-alert-single.component';

import { TEST_WEATHER_ALERT } from 'src/assets/data/testing/weather.testing';

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
    component.alert = TEST_WEATHER_ALERT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('alert', () => {
      it('should be an Object', () => {
        const result = component.alert;

        expect(result).toBeInstanceOf(Object);
      });
    });
  });
});
