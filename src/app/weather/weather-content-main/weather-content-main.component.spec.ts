import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContentMainComponent } from './weather-content-main.component';

describe('WeatherContentMainComponent', () => {
  let component: WeatherContentMainComponent;
  let fixture: ComponentFixture<WeatherContentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherContentMainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentMainComponent);
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
