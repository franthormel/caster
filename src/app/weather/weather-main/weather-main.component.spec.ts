import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { WeatherToolbarComponent } from '../weather-toolbar/weather-toolbar.component';
import { WeatherContentMainComponent } from '../weather-content-main/weather-content-main.component';
import { WeatherContentTopComponent } from '../weather-content-top/weather-content-top.component';
import { WeatherContentBottomComponent } from '../weather-content-bottom/weather-content-bottom.component';
import { WeatherMainComponent } from './weather-main.component';

import { WeatherDataService } from '../weather-data.service';
import { WeatherModeService } from '../weather-mode.service';
import { appStateReducer } from '../../app-state.reducers';
import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherGeolocation } from '../../models/geolocation/geolocation.models';

describe('WeatherMainComponent', () => {
  let component: WeatherMainComponent;
  let fixture: ComponentFixture<WeatherMainComponent>;

  const weatherData: WeatherData = {
    lat: 0,
    lon: 0,
    timezone: '',
    timezone_offset: 0,
    current: {
      dt: 0,
      clouds: 0,
      dew_point: 0,
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      uvi: 0,
      wind_deg: 0,
      wind_speed: 0,
      weather: [],
    },
    hourly: [],
    daily: [],
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherToolbarComponent,
        WeatherContentMainComponent,
        WeatherContentTopComponent,
        WeatherContentBottomComponent,
        WeatherMainComponent,
        WeatherMainComponent,
      ],
      imports: [
        HttpClientModule,
        MatProgressBarModule,
        MatDialogModule,
        MatMenuModule,
        StoreModule.forRoot({ appState: appStateReducer }),
      ],
      providers: [WeatherDataService, WeatherModeService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMainComponent);
    component = fixture.componentInstance;

    component.weatherData$ = new Observable<WeatherData>();
    component.geolocationsData$ = new Observable<WeatherGeolocation[]>();
    component.weatherData = weatherData;
    component.geolocations = [];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('weatherData$', () => {
      it('should be an Observable', () => {
        const result = component.weatherData$;

        expect(result).toBeInstanceOf(Observable);
      });
    });

    describe('geolocationsData$', () => {
      it('should be an Observable', () => {
        const result = component.weatherData$;

        expect(result).toBeInstanceOf(Observable);
      });
    });

    describe('weatherData', () => {
      it('should be an Object', () => {
        const result = component.weatherData;

        expect(result).toBeInstanceOf(Object);
      });

      it('should be defined', () => {
        const result = component.weatherData;

        expect(result).toBeDefined();
      });
    });

    describe('geolocations', () => {
      it('should be an Array', () => {
        const result = component.geolocations;

        console.log(typeof component.geolocationsData$);

        expect(result).toBeInstanceOf(Array);
      });

      it('should be defined', () => {
        const result = component.geolocations;

        expect(result).toBeDefined();
      });
    });

    describe('loading', () => {
      it('should be a Boolean', () => {
        const result = component.loading;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should be defined', () => {
        const result = component.loading;

        expect(result).toBeDefined();
      });
    });
  });

  describe('methods', () => {
    describe('alertsCount()', () => {
      it('should return a Number or undefined', () => {
        const result = typeof component.alertsCount;
        const expectations = [typeof Number, typeof undefined];

        expect(expectations).toContain(result);
      });
    });

    describe('geolocation()', () => {
      it('should return an Object or undefined', () => {
        const result = typeof component.geolocation;
        const expectations = [typeof Object, typeof undefined];

        expect(expectations).toContain(result);
      });
    });
  });
});
