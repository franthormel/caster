import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlertSingleComponent } from './weather-alert-single.component';

describe('WeatherAlertSingleComponent', () => {
  let component: WeatherAlertSingleComponent;
  let fixture: ComponentFixture<WeatherAlertSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAlertSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // TODO
    pending('WeatherAlertSingleComponent');
  });
});
