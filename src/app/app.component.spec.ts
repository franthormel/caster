import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  describe('methods()', () => {
    describe('navigationLinks()', () => {
      it('should return an Array', () => {
        const result = app.navigationLinks;

        expect(result).toBeInstanceOf(Array);
      });
    });

    describe('title()', () => {
      it('should return a String', () => {
        const result = app.title;

        expect(result).toBeInstanceOf(String);
      });
    });
  });
});
