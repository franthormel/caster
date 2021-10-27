import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { WeatherContentBottomComponent } from './weather-content-bottom.component';
import { TemperatureConverterService } from '../temperature-converter.service';
import { WeatherModeService } from '../weather-mode.service';
import { WeatherStateIndexerService } from '../weather-state-indexer.service';
import { appStateReducer } from '../../app-state.reducers';

import { TEST_WEATHER_DATA } from 'src/assets/data/testing/weather.testing';

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
      providers: [
        TemperatureConverterService,
        WeatherModeService,
        WeatherStateIndexerService,
      ],
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

  describe('property', () => {});
});
