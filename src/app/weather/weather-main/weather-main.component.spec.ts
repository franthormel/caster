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

import { WeatherData } from '../../models/weather/weather-data.models';
import { WeatherGeolocation } from '../../models/geolocation/geolocation.models';
import { StateManagerService } from '../../state-manager.service';

import { appStateReducer } from '../../app-state.reducers';
import { TEST_WEATHER_DATA } from '../../../assets/data/testing/weather.testing';

describe('WeatherMainComponent', () => {
  let component: WeatherMainComponent;
  let fixture: ComponentFixture<WeatherMainComponent>;

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
      providers: [StateManagerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMainComponent);
    component = fixture.componentInstance;

    component.weatherData$ = new Observable<WeatherData>();
    component.geolocationsData$ = new Observable<WeatherGeolocation[]>();
    component.weatherData = TEST_WEATHER_DATA;
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
    });

    describe('geolocations', () => {
      it('should be an Array', () => {
        const result = component.geolocations;

        expect(result).toBeInstanceOf(Array);
      });
    });

    describe('loading', () => {
      it('should be a Boolean', () => {
        const result = component.loading;

        expect(result).toBeInstanceOf(Boolean);
      });
    });
  });

  describe('methods', () => {
    describe('alertsCount()', () => {
      it('should return a Number', () => {
        const result = component.alertsCount;

        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('geolocation()', () => {
      it('should return an WeatherGeolocation or undefined', () => {
        const type = typeof component.geolocation;
        const result = type === 'object' || type === 'undefined';

        expect(result).toBeTruthy();
      });
    });
  });
});
