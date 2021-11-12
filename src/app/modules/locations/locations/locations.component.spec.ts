import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from '../../../app-state.reducers';

import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';
import { StateManagerService } from '../../shared/services/state-manager.service';
import { StringManagerService } from '../../shared/services/string-manager.service';

import { LocationsComponent } from './locations.component';

describe('LocationsComponent', () => {
  let component: LocationsComponent;
  let fixture: ComponentFixture<LocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationsComponent],
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ appState: appStateReducer }),
        MatDialogModule,
      ],
      providers: [
        DataManagerService,
        DialogHandlerService,
        StateManagerService,
        StringManagerService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('geolocations', () => {
      it('should be an Array', () => {
        const result = component.geolocations;

        expect(result).toBeInstanceOf(Array);
      });
    });
    describe('loading', () => {
      it('should be a Boolean', () => {
        const result = component.loading;

        expect(result).toBeInstanceOf(Boolean);
      });
    });
    describe('search', () => {
      it('should be a String', () => {
        const result = component.search;

        expect(result).toBeInstanceOf(String);
      });
    });
  });

  describe('methods()', () => {
    describe('clearSearch()', () => {
      it('should clear search property', () => {
        component.clearSearch();

        const result = component.search;

        expect(result).toBe('');
      });
      it('should clear search property after search is set to a value', () => {
        component.search = 'I am text';

        component.clearSearch();

        const result = component.search;

        expect(result).toBe('');
      });
    });
    describe('locationClicked()', () => {
      beforeEach(() => {
        spyOn(component, 'locationClicked');

        component.locationClicked(0);
      });

      it('should be called when invoked', () => {
        expect(component.locationClicked).toHaveBeenCalled();
      });
    });
    describe('showLocationIcon()', () => {
      it('should return a Boolean', () => {
        const result = component.showLocationIcon(0);

        expect(result).toBeInstanceOf(Boolean);
      });
    });
    describe('locations()', () => {
      it('should return an Array', () => {
        const result = component.locations;

        expect(result).toBeInstanceOf(Array);
      });
    });
    describe('searchable()', () => {
      it('should return a Boolean', () => {
        const result = component.searchable;

        expect(result).toBeInstanceOf(Boolean);
      });
    });
  });
});
