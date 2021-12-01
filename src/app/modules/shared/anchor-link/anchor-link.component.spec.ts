import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { appStateReducer } from '../../../app-state.reducers';
import { AnchorLinkComponent } from './anchor-link.component';
import { KlassManagerService } from '../services/klass-manager.service';

describe('AnchorLinkComponent', () => {
  let component: AnchorLinkComponent;
  let fixture: ComponentFixture<AnchorLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnchorLinkComponent],
      providers: [KlassManagerService],
      imports: [StoreModule.forRoot({ appState: appStateReducer })],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorLinkComponent);
    component = fixture.componentInstance;

    component.href = 'https://example.com';
    component.text = 'example';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('properties', () => {
    describe('text', () => {
      it('should return a String', () => {
        const result = component.text;

        expect(result).toBeInstanceOf(String);
      });
    });

    describe('url', () => {
      it('should return a String', () => {
        const result = component.href;

        expect(result).toBeInstanceOf(String);
      });
    });
  });

  describe('methods()', () => {
    describe('anchorLink', () => {
      it('should return an Object', () => {
        const result = component.anchorLink;

        expect(result).toBeInstanceOf(Object);
      });
    });
  });
});
