import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogHandlerService } from './dialog-handler.service';

import { WEATHER_ALERTS } from '../../../tests/weather.testing';

describe('DialogHandlerService', () => {
  let service: DialogHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule],
    });
    service = TestBed.inject(DialogHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('methods()', () => {
    describe('showWeatherAlert()', () => {
      beforeEach(() => {
        spyOn(service, 'showWeatherAlert');

        service.showWeatherAlert(WEATHER_ALERTS);
      });

      it('should be called when invoked', () => {
        expect(service.showWeatherAlert).toHaveBeenCalled();
      });
    });

    describe('showError()', () => {
      beforeEach(() => {
        spyOn(service, 'showError');

        const error: Error = {
          name: 'Error Name',
          message: 'Error Message',
        };

        service.showError(error);
      });

      it('should be called when invoked', () => {
        expect(service.showError).toHaveBeenCalled();
      });
    });
  });
});
