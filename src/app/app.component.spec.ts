import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from './app-state.reducers';
import { AppComponent } from './app.component';
import { StateManagerService } from './modules/shared/services/state-manager.service';

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
      providers: [StateManagerService],
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

    describe('classTheme()', () => {
      it('should return an Object', () => {
        const result = app.classTheme;

        expect(result).toBeInstanceOf(Object);
      });
    });
  });
});
