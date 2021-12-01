import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { appStateReducer } from 'src/app/app-state.reducers';

import { ThemeManagerService } from './theme-manager.service';
import { StateManagerService } from './state-manager.service';

describe('ThemeManagerService', () => {
  let service: ThemeManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({ appState: appStateReducer })],
      providers: [StateManagerService],
    });
    service = TestBed.inject(ThemeManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transparentBackground()', () => {
    it('should return an Object', () => {
      const result = service.transparentBackground;

      expect(result).toBeInstanceOf(Object);
    });
  });

  describe('theme()', () => {
    it('should return an Object', () => {
      const result = service.theme;

      expect(result).toBeInstanceOf(Object);
    });
  });

  describe('anchorLink', () => {
    it('should return an Object', () => {
      const result = service.anchorLink;

      expect(result).toBeInstanceOf(Object);
    });
  });
});
