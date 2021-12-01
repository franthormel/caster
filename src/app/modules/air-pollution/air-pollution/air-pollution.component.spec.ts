import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { AirPollutionComponent } from './air-pollution.component';
import { AirQualityService } from '../air-quality.service';
import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';
import { EpochConverterService } from '../../shared/services/epoch-converter.service';
import { StateManagerService } from '../../shared/services/state-manager.service';
import { ThemeManagerService } from '../../shared/services/theme-manager.service';

import { appStateReducer } from '../../../app-state.reducers';
import { AIR_POLLUTION } from '../../../tests/air-pollution.testing';

describe('AirPollutionComponent', () => {
  let component: AirPollutionComponent;
  let fixture: ComponentFixture<AirPollutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({ appState: appStateReducer }),
        MatDialogModule,
        MatProgressBarModule,
        MatIconModule,
        MatButtonModule,
      ],
      declarations: [AirPollutionComponent],
      providers: [
        AirQualityService,
        DataManagerService,
        DialogHandlerService,
        EpochConverterService,
        StateManagerService,
        ThemeManagerService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPollutionComponent);
    component = fixture.componentInstance;
    component.airPollution = AIR_POLLUTION;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('loading', () => {
      it('should be a Boolean', () => {
        const result = component.loading;

        expect(result).toBeInstanceOf(Boolean);
      });
    });
  });

  describe('methods()', () => {
    describe('next()', () => {
      beforeEach(() => {
        spyOn(component, 'next');

        component.next();
      });

      it('should be called when invoked', () => {
        expect(component.next).toHaveBeenCalled();
      });
    });

    describe('previous()', () => {
      beforeEach(() => {
        spyOn(component, 'previous');

        component.previous();
      });

      it('should be called when invoked', () => {
        expect(component.previous).toHaveBeenCalled();
      });
    });

    describe('airComponents()', () => {
      it('should return an Array', () => {
        const result = component.airComponents;

        expect(result).toBeInstanceOf(Array);
      });
    });

    describe('description()', () => {
      it('should return an String', () => {
        const result = component.description;

        expect(result).toBeInstanceOf(String);
      });
    });

    describe('time()', () => {
      it('should return an String', () => {
        const result = component.time;

        expect(result).toBeInstanceOf(String);
      });
    });

    describe('transparentBackground()', () => {
      it('should return an Object', () => {
        const result = component.transparentBackground;

        expect(result).toBeInstanceOf(Object);
      });
    });
  });
});
