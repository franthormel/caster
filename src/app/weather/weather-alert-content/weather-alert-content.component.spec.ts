import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipsModule } from '@angular/material/chips';

import { WeatherAlertContentComponent } from './weather-alert-content.component';
import { StringParserService } from '../../shared/string-parser.service';

import { TEST_WEATHER_ALERT } from 'src/assets/data/testing/weather.testing';
import {
  TESTING_STRINGS_UPPER_CASE as upperCasedStrings,
  TESTING_STRINGS_VARIOUS_NON_UPPER_CASE as nonUpperCasedStrings,
} from 'src/assets/data/testing/services/strings.testing';

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
    component.alert = TEST_WEATHER_ALERT;
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

    describe('lineIsUppercased()', () => {
      for (const upperCasedString of upperCasedStrings) {
        it(`should return true if param is upper cased (${upperCasedString})`, () => {
          const result = component.lineIsUppercased(upperCasedString);

          expect(result).toBeTruthy();
        });
      }

      for (const nonUpperCasedString of nonUpperCasedStrings) {
        it(`should return false if param is not upper cased (${nonUpperCasedString})`, () => {
          const result = component.lineIsUppercased(nonUpperCasedString);

          expect(result).toBeFalsy();
        });
      }
    });
  });
});
