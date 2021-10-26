import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { appStateReducer } from '../../app-state.reducers';
import { WeatherToolbarComponent } from './weather-toolbar.component';
import { WeatherModeService } from '../weather-mode.service';

describe('WeatherToolbarComponent', () => {
  let component: WeatherToolbarComponent;
  let fixture: ComponentFixture<WeatherToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherToolbarComponent],
      imports: [
        StoreModule.forRoot({ appState: appStateReducer }),
        MatMenuModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
      ],
      providers: [WeatherModeService],
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
});
