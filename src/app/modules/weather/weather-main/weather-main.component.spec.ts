import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { WeatherData } from '../../../models/weather/weather-data.models';
import { WeatherGeolocation } from '../../../models/geolocation/geolocation.models';
import { WeatherContentMainComponent } from '../weather-content-main/weather-content-main.component';
import { WeatherContentTopComponent } from '../weather-content-top/weather-content-top.component';
import { WeatherContentBottomComponent } from '../weather-content-bottom/weather-content-bottom.component';
import { WeatherMainComponent } from './weather-main.component';
import { StateManagerService } from '../../../state-manager.service';

import { appStateReducer } from '../../../app-state.reducers';
import { WEATHER_DATA } from '../../../tests/weather.testing';

describe('WeatherMainComponent', () => {
  let component: WeatherMainComponent;
  let fixture: ComponentFixture<WeatherMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        WeatherMainComponent,
        WeatherContentMainComponent,
        WeatherContentTopComponent,
        WeatherContentBottomComponent,
      ],
      imports: [
        HttpClientModule,
        MatProgressBarModule,
        MatDialogModule,
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
    component.weatherData = WEATHER_DATA;
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
        const result = component.geolocationsData$;

        expect(result).toBeInstanceOf(Observable);
      });
    });

    describe('weatherData', () => {
      it('should be a WeatherData', () => {
        const result = component.weatherData;

        expect(result).toBeInstanceOf(Object);
      });
    });

    describe('geolocations', () => {
      it('should be a WeatherGeolocation[]', () => {
        const result = component.geolocations;

        expect(result).toBeInstanceOf(Array);
      });
    });

    describe('loading', () => {
      it('should be a Boolean', () => {
        const result = component.loading;

        expect(result).toBeInstanceOf(Boolean);
      });

      it('should be initalized to true', () => {
        const result = component.loading;

        expect(result).toBeTruthy();
      });
    });
  });

  describe('methods', () => {
    describe('weatherLocation()', () => {
      it('should return a String', () => {
        const result = component.weatherLocation;

        expect(result).toBeInstanceOf(String);
      });
    });
  });
});
