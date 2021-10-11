import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContentTopRightComponent } from './weather-content-top-right.component';

describe('WeatherContentTopRightComponent', () => {
  let component: WeatherContentTopRightComponent;
  let fixture: ComponentFixture<WeatherContentTopRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherContentTopRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentTopRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
