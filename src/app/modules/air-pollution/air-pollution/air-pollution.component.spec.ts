import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { AirPollutionComponent } from './air-pollution.component';
import { appStateReducer } from '../../../app-state.reducers';

describe('AirPollutionComponent', () => {
  let component: AirPollutionComponent;
  let fixture: ComponentFixture<AirPollutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        StoreModule.forRoot({ appState: appStateReducer }),
      ],
      declarations: [AirPollutionComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirPollutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
