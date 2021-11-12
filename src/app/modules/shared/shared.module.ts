import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { DataManagerService } from './services/data-manager.service';
import { EpochConverterService } from './services/epoch-converter.service';
import { StateManagerService } from './services/state-manager.service';
import { StringManagerService } from './services/string-manager.service';
import { DialogHandlerService } from './services/dialog-handler.service';
import { SettingsManagerService } from './services/settings-manager.service';
@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [
    DataManagerService,
    DialogHandlerService,
    EpochConverterService,
    SettingsManagerService,
    StateManagerService,
    StringManagerService,
  ],
  exports: [ErrorDialogComponent],
})
export class SharedModule {}
