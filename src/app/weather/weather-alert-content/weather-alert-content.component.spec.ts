import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAlertContentComponent } from './weather-alert-content.component';

describe('WeatherAlertContentComponent', () => {
  let component: WeatherAlertContentComponent;
  let fixture: ComponentFixture<WeatherAlertContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAlertContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAlertContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
