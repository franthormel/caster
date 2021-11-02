import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { appStateReducer } from './app-state.reducers';
import { StateManagerService } from './state-manager.service';

describe('StateManagerService', () => {
  let service: StateManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ appState: appStateReducer }),
      ],
    });
    service = TestBed.inject(StateManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('properties', () => {});

  describe('methods()', () => {
    describe('localFileWeather()', () => {
      it('should return an Observable when called', () => {
        const result = service.localFileWeather();

        expect(result).toBeInstanceOf(Observable);
      });
    });

    describe('localFileGeolocation()', () => {
      it('should return an Observable when called', () => {
        const result = service.localFileGeolocation();

        expect(result).toBeInstanceOf(Observable);
      });
    });

    describe('indexHourly()', () => {
      it('should return a number', () => {
        const result = service.indexHourly;

        expect(result).toBeInstanceOf(Number);
      });

      it('should return a number greater than or equal to 0', () => {
        const result = service.indexHourly;

        expect(result).toBeGreaterThanOrEqual(0);
      });
    });

    describe('indexDaily()', () => {
      it('should return a number', () => {
        const result = service.indexDaily;

        expect(result).toBeInstanceOf(Number);
      });

      it('should return a number greater than or equal to 0', () => {
        const result = service.indexDaily;

        expect(result).toBeGreaterThanOrEqual(0);
      });
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
});
