import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { WeatherContentMainComponent } from '../weather-content-main/weather-content-main.component';
import { WeatherContentTopComponent } from '../weather-content-top/weather-content-top.component';
import { WeatherContentBottomComponent } from '../weather-content-bottom/weather-content-bottom.component';
import { WeatherMainComponent } from './weather-main.component';
import { StateManagerService } from '../../shared/services/state-manager.service';

import { appStateReducer } from '../../../app-state.reducers';
import { WEATHER_DATA } from '../../../tests/weather.testing';
import { WEATHER_GEOLOCATION } from '../../../tests/geolocation.testing';
import { DataManagerService } from '../../shared/services/data-manager.service';

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
      providers: [StateManagerService, DataManagerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherMainComponent);
    component = fixture.componentInstance;

    component.weatherData = WEATHER_DATA;
    component.geolocation = WEATHER_GEOLOCATION;

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

    describe('geolocations', () => {
      it('should be a a WeatherGeolocation', () => {
        const result = component.geolocation;

        expect(result).toBeInstanceOf(Object);
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
