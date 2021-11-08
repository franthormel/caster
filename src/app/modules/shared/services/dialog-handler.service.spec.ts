import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { DialogHandlerService } from './dialog-handler.service';

describe('DialogHandlerService', () => {
  let service: DialogHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule]
    });
    service = TestBed.inject(DialogHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
