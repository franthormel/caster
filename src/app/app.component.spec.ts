import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from './app-state.reducers';
import { AppComponent } from './app.component';
import { ThemeManagerService } from './modules/shared/services/theme-manager.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({ appState: appStateReducer }),
      ],
      providers: [ThemeManagerService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

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

    describe('theme()', () => {
      it('should return an Object', () => {
        const result = app.theme;

        expect(result).toBeInstanceOf(Object);
      });
    });
  });
});
