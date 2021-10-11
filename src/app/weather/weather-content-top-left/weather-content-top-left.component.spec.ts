import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContentTopLeftComponent } from './weather-content-top-left.component';

describe('WeatherContentTopLeftComponent', () => {
  let component: WeatherContentTopLeftComponent;
  let fixture: ComponentFixture<WeatherContentTopLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherContentTopLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentTopLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
