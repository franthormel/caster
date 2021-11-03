import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { WeatherContentBottomComponent } from './weather-content-bottom.component';
import { TemperatureConverterService } from '../temperature-converter.service';
import { StateManagerService } from '../../state-manager.service';

import { appStateReducer } from '../../app-state.reducers';
import { TEST_WEATHER_DATA } from '../../../assets/data/testing/weather.testing';

describe('WeatherContentBottomComponent', () => {
  let component: WeatherContentBottomComponent;
  let fixture: ComponentFixture<WeatherContentBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherContentBottomComponent],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ appState: appStateReducer }),
      ],
      providers: [TemperatureConverterService, StateManagerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentBottomComponent);
    component = fixture.componentInstance;
    component.weatherData = TEST_WEATHER_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('weatherData', () => {
      it('should be a WeatherData', () => {
        const result = component.weatherData;

        expect(result).toBeInstanceOf(Object);
      });
    });
  });

  describe('methods', () => {
    describe('snowIsPresent()', () => {
      it('should return a Boolean', () => {
        const result = component.snowIsPresent;

        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('snowTooltip()', () => {
      it('should return a String', () => {
        const result = component.snowTooltip;

        expect(result).toBeInstanceOf(String);
      });
    });

    describe('snow()', () => {
      it('should return a Number or undefined', () => {
        const type = typeof component.snow;
        const result = type === 'number' || type === 'undefined';

        expect(result).toBeTruthy();
      });
    });

    describe('rainIsPresent()', () => {
      it('should return a Boolean', () => {
        const result = component.rainIsPresent;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('rainTooltip()', () => {
      it('should return a String', () => {
        const result = component.rainTooltip;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('rain()', () => {
      it('should return a Number or undefined', () => {
        const type = typeof component.rain;
        const result = type === 'number' || type === 'undefined';

        expect(result).toBeTruthy();
      });
    });

    describe('precipitationTooltip()', () => {
      it('should return a String', () => {
        const result = component.precipitationTooltip;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('precipitationTitle()', () => {
      it('should return a String', () => {
        const result = component.precipitationTitle;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('precipitation()', () => {
      it('should return a String', () => {
        const result = component.precipitation;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('dewPoint()', () => {
      it('should return a Number', () => {
        const result = component.dewPoint;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('uviTooltip()', () => {
      it('should return a String', () => {
        const result = component.uviTooltip;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('uvi()', () => {
      it('should return a Number', () => {
        const result = component.uvi;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('visibilityIsPresent()', () => {
      it('should return a Boolean', () => {
        const result = component.visibilityIsPresent;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('visibility()', () => {
      it('should return a String', () => {
        const result = component.visibility;
        expect(result).toBeInstanceOf(String);
      });
    });
  });
});
