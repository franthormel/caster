import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { appStateReducer } from '../../app-state.reducers';
import { WeatherToolbarComponent } from './weather-toolbar.component';
import { StateManagerService } from '../../state-manager.service';

describe('WeatherToolbarComponent', () => {
  let component: WeatherToolbarComponent;
  let fixture: ComponentFixture<WeatherToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherToolbarComponent],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ appState: appStateReducer }),
        MatMenuModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
      ],
      providers: [StateManagerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('alertCount', () => {
      it('should return a Number', () => {
        const result = component.alertCount;
        expect(result).toBeInstanceOf(Number);
      });
    });

    describe('loading', () => {
      it('should return a Boolean', () => {
        const result = component.loading;
        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('alertEvent', () => {
      it('should return an EventEmitter', () => {
        const result = component.alertEvent;
        expect(result).toBeInstanceOf(EventEmitter);
      });
    });
  });

  describe('methods', () => {
    describe('showAlert()', () => {
      beforeEach(() => {
        spyOn(component, 'showAlert');

        component.showAlert();
      });

      it('should be called when invoked', () => {
        expect(component.showAlert).toHaveBeenCalled();
      });
    });
  });
});
