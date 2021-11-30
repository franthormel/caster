import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { appStateReducer } from 'src/app/app-state.reducers';

import { KlassManagerService } from './klass-manager.service';
import { StateManagerService } from './state-manager.service';

describe('KlassManagerService', () => {
  let service: KlassManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ appState: appStateReducer })],
      providers: [StateManagerService],
    });
    service = TestBed.inject(KlassManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('background()', () => {
    it('should return an Object', () => {
      const result = service.imageBackground;

      expect(result).toBeInstanceOf(Object);
    });
  });

  describe('transparentBackground()', () => {
    it('should return an Object', () => {
      const result = service.transparentBackground;

      expect(result).toBeInstanceOf(Object);
    });
  });
});
