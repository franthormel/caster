import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { SettingsTemperature } from '../../../models/settings.enums';

import { appStateReducer } from '../../../app-state.reducers';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [StoreModule.forRoot({ appState: appStateReducer })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('methods', () => {
    describe('changeTemperature()', () => {
      beforeEach(() => {
        spyOn(component, 'changeTemperature');

        component.changeTemperature(SettingsTemperature.Celsius);
      });

      it('should be called when invoked', () => {
        expect(component.changeTemperature).toHaveBeenCalled();
      });
    });

    describe('toggleDegreeSign()', () => {
      beforeEach(() => {
        spyOn(component, 'toggleDegreeSign');

        component.toggleDegreeSign();
      });

      it('should be called when invoked', () => {
        expect(component.toggleDegreeSign).toHaveBeenCalled();
      });
    });

    describe('degreeSign()', () => {
      it('should return a Boolean', () => {
        const result = component.degreeSign;

        expect(result).toBeInstanceOf(Boolean);
      });
    });

    describe('degreeSignTooltip()', () => {
      it('should return a String', () => {
        const result = component.degreeSignTooltip;

        expect(result).toBeInstanceOf(String);
      });
    });

    describe('temperature()', () => {
      it('should return a String', () => {
        const result = component.temperature;

        expect(result).toBeInstanceOf(String);
      });
    });

    describe('temperatureOptions()', () => {
      it('should return an Array', () => {
        const result = component.temperatureOptions;

        expect(result).toBeInstanceOf(Array);
      });
    });

    describe('creditsImages()', () => {
      it('should return an Array', () => {
        const result = component.creditsImages;

        expect(result).toBeInstanceOf(Array);
      });
    });

    describe('creditsSoftware()', () => {
      it('should return an Array', () => {
        const result = component.creditsSoftware;

        expect(result).toBeInstanceOf(Array);
      });
    });
  });
});
