import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { DataManagerService } from './services/data-manager.service';
import { DialogHandlerService } from './services/dialog-handler.service';
import { EpochConverterService } from './services/epoch-converter.service';
import { StateManagerService } from './services/state-manager.service';
import { StringManagerService } from './services/string-manager.service';
@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatIconModule],
  providers: [
    DataManagerService,
    DialogHandlerService,
    EpochConverterService,
    StateManagerService,
    StringManagerService,
  ],
  exports: [
    ErrorDialogComponent,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatProgressBarModule,
    MatRippleModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
