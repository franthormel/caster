import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlertMultipleComponent } from './weather-alert-multiple.component';

describe('WeatherAlertMultipleComponent', () => {
  let component: WeatherAlertMultipleComponent;
  let fixture: ComponentFixture<WeatherAlertMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAlertMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // TODO
    pending('WeatherAlertMultipleComponent');
  });
});
