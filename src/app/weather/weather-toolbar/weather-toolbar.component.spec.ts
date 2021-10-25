import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherToolbarComponent } from './weather-toolbar.component';

describe('WeatherToolbarComponent', () => {
  let component: WeatherToolbarComponent;
  let fixture: ComponentFixture<WeatherToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // TODO
    pending('WeatherToolbarComponent');
  });
});
