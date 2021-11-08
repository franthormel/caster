import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';

import { WeatherAlertContentComponent } from './weather-alert-content.component';
import { StringParserService } from '../../../string-parser.service';

import { WEATHER_ALERT } from '../../../tests/weather.testing';

describe('WeatherAlertContentComponent', () => {
  let component: WeatherAlertContentComponent;
  let fixture: ComponentFixture<WeatherAlertContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatChipsModule],
      providers: [StringParserService],
      declarations: [WeatherAlertContentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertContentComponent);
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

  describe('methods', () => {
    describe('alertLines()', () => {
      it('should return an Array', () => {
        const result = component.alertLines;

        expect(result).toBeInstanceOf(Array);
      });

      it('should return expected number of results', () => {
        const result = component.alertLines.length;
        const expectation = 27;

        expect(result).toBe(expectation);
      });
    });
  });
});
