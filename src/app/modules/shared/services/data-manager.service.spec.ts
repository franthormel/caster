import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { appStateReducer } from '../../../app-state.reducers';
import { DataManagerService } from './data-manager.service';
import { StateManagerService } from './state-manager.service';

describe('DataManagerService', () => {
  let service: DataManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ appState: appStateReducer }),
      ],
      providers: [StateManagerService],
    });
    service = TestBed.inject(DataManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('localFileWeather()', () => {
    it('should return an Observable when called', () => {
      const result = service.fileDataWeather();

      expect(result).toBeInstanceOf(Observable);
    });
  });

  describe('localFileGeolocation()', () => {
    it('should return an Observable when called', () => {
      const result = service.fileDataGeolocation();

      expect(result).toBeInstanceOf(Observable);
    });
  });
});
