import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from '../app-state.reducers';
import { WeatherModeService } from './weather-mode.service';

describe('WeatherModeService', () => {
  let service: WeatherModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ appState: appStateReducer })],
    });
    service = TestBed.inject(WeatherModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isCurrent()', () => {
    it('should return true if set to the expected value', () => {
      service.changeToCurrent();

      expect(service.isCurrent).toBeTruthy();
    });

    it('should return true if set to the expected value from another value', () => {
      service.changeToDaily();
      service.changeToCurrent();

      expect(service.isCurrent).toBeTruthy();
    });

    it('should return false if set to another value', () => {
      service.changeToDaily();

      expect(service.isCurrent).toBeFalsy();
    });

    it('should return false if set to another value from expected value', () => {
      service.changeToCurrent();
      service.changeToHourly();

      expect(service.isCurrent).toBeFalsy();
    });
  });

  describe('isHourly()', () => {
    it('should return true if set to the expected value', () => {
      service.changeToHourly();

      expect(service.isHourly).toBeTruthy();
    });

    it('should return true if set to the expected value from another value', () => {
      service.changeToDaily();
      service.changeToHourly();

      expect(service.isHourly).toBeTruthy();
    });

    it('should return false if set to another value', () => {
      service.changeToDaily();

      expect(service.isHourly).toBeFalsy();
    });

    it('should return false if set to another value from expected value', () => {
      service.changeToHourly();
      service.changeToCurrent();

      expect(service.isHourly).toBeFalsy();
    });
  });

  describe('isDaily()', () => {
    it('should return true if set to the expected value', () => {
      service.changeToDaily();

      expect(service.isDaily).toBeTruthy();
    });

    it('should return true if set to the expected value from another value', () => {
      service.changeToCurrent();
      service.changeToDaily();

      expect(service.isDaily).toBeTruthy();
    });

    it('should return false if set to another value', () => {
      service.changeToCurrent();

      expect(service.isDaily).toBeFalsy();
    });

    it('should return false if set to another value from expected value', () => {
      service.changeToDaily();
      service.changeToHourly();

      expect(service.isDaily).toBeFalsy();
    });
  });
});
