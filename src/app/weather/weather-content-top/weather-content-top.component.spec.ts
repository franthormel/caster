import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContentTopComponent } from './weather-content-top.component';

describe('WeatherContentTopComponent', () => {
  let component: WeatherContentTopComponent;
  let fixture: ComponentFixture<WeatherContentTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherContentTopComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    pending('Place missing imports');
  });

  describe('properties', () => {});

  describe('methods', () => {});
});
