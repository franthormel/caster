import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from '../../app-state.reducers';
import { TEST_WEATHER_DATA } from '../../../assets/data/testing/weather.testing';

import { WeatherContentMainComponent } from './weather-content-main.component';
import { StringParserService } from '../../string-parser.service';
import { TemperatureConverterService } from '../temperature-converter.service';
import { StateManagerService } from '../../state-manager.service';

describe('WeatherContentMainComponent', () => {
  let component: WeatherContentMainComponent;
  let fixture: ComponentFixture<WeatherContentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherContentMainComponent],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ appState: appStateReducer }),
      ],
      providers: [
        StringParserService,
        TemperatureConverterService,
        StateManagerService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentMainComponent);
    component = fixture.componentInstance;
    component.weatherData = TEST_WEATHER_DATA;
    component.weatherLocation = '';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('weatherData()', () => {
      it('should return a WeatherData', () => {
        const result = component.weatherData;
        expect(result).toBeInstanceOf(Object);
      });
    });

    describe('weatherLocation()', () => {
      it('should return a String', () => {
        const result = component.weatherLocation;
        expect(result).toBeInstanceOf(String);
      });
    });
  });

  describe('methods', () => {
    describe('cloudiness', () => {
      it('should return a Number', () => {
        const result = component.cloudiness;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('pressure', () => {
      it('should return a Number', () => {
        const result = component.pressure;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('humidity', () => {
      it('should return a Number', () => {
        const result = component.humidity;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('showDailyDetailReading', () => {
      it('should return a Boolean', () => {
        const result = component.showDailyDetailReading;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('dailyDetailReadingModeIsTemperature()', () => {
      it('should return a Boolean', () => {
        const result = component.dailyDetailReadingModeIsTemperature;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('min', () => {
      it('should return a Number', () => {
        const result = component.min;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('max', () => {
      it('should return a Number', () => {
        const result = component.max;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('morning', () => {
      it('should return a Number', () => {
        const result = component.morning;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('evening', () => {
      it('should return a Number', () => {
        const result = component.evening;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('night', () => {
      it('should return a Number', () => {
        const result = component.night;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('underlineTemperature', () => {
      it('should return a Boolean', () => {
        const result = component.underlineTemperature;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('temperature', () => {
      it('should return a Number', () => {
        const result = component.temperature;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('feelsLike', () => {
      it('should return a feelsLike', () => {
        const result = component.feelsLike;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('underlineFeelsLike', () => {
      it('should return a Boolean', () => {
        const result = component.underlineFeelsLike;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('weatherIcon', () => {
      it('should return a String', () => {
        const result = component.weatherIcon;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('weatherDescription', () => {
      it('should return a String', () => {
        const result = component.weatherDescription;
        expect(result).toBeInstanceOf(String);
      });
    });

    describe('windSpeed', () => {
      it('should return a Number', () => {
        const result = component.windSpeed;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('windDirection', () => {
      it('should return a Number', () => {
        const result = component.windDirection;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('windGustIsPresent', () => {
      it('should return a Boolean', () => {
        const result = component.windGustIsPresent;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('windGust', () => {
      it('should return a Number', () => {
        const result = component.windGust;
        expect(result).toBeInstanceOf(Number);
      });
    });
  });
});
