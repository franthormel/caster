import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ErrorDialogComponent } from './error-dialog.component';

import { ERROR } from '../../../tests/errror.testing';

describe('ErrorDialogComponent', () => {
  let component: ErrorDialogComponent;
  let fixture: ComponentFixture<ErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorDialogComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: ERROR,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('methods', () => {
    describe('message', () => {
      it('should return a String', () => {
        const result = component.message;

        expect(result).toBeInstanceOf(String);
      });

      it("should return the Error's message", () => {
        const expected = ERROR.message;
        const result = component.message;

        expect(result).toBe(expected);
      });
    });

    describe('name', () => {
      it('should return a String', () => {
        const result = component.name;

        expect(result).toBeInstanceOf(String);
      });

      it("should return the Error's name", () => {
        const expected = ERROR.name;
        const result = component.name;

        expect(result).toBe(expected);
      });
    });
  });
});
