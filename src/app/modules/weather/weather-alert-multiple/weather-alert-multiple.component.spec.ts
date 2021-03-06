import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';

import { WeatherAlertContentComponent } from '../weather-alert-content/weather-alert-content.component';
import { WeatherAlertMultipleComponent } from './weather-alert-multiple.component';
import { EpochConverterService } from '../../shared/services/epoch-converter.service';

describe('WeatherAlertMultipleComponent', () => {
  let component: WeatherAlertMultipleComponent;
  let fixture: ComponentFixture<WeatherAlertMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherAlertMultipleComponent,
        WeatherAlertContentComponent,
      ],
      imports: [MatExpansionModule],
      providers: [EpochConverterService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('alerts', () => {
      it('should be an Array', () => {
        const result = component.alerts;

        expect(result).toBeInstanceOf(Array);
      });
    });
  });

  describe('methods', () => {
    describe('isExpanded()', () => {
      it('should return true if param is 0', () => {
        const result = component.isExpanded(0);

        expect(result).toBeTruthy();
      });

      for (const number of [-2, -5, -7, 1000, 2021]) {
        it(`should return false if param is not ${number}`, () => {
          const result = component.isExpanded(number);

          expect(result).toBeFalsy();
        });
      }
    });
  });
});
