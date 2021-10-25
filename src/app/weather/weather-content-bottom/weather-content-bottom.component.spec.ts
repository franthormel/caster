import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherContentBottomComponent } from './weather-content-bottom.component';

describe('WeatherContentBottomComponent', () => {
  let component: WeatherContentBottomComponent;
  let fixture: ComponentFixture<WeatherContentBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherContentBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherContentBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // TODO
    pending('WeatherContentBottomComponent');
  });
});
