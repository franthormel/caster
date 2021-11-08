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
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DataManagerService } from './services/data-manager.service';
import { EpochConverterService } from './services/epoch-converter.service';
import { StateManagerService } from './services/state-manager.service';
import { StringParserService } from './services/string-parser.service';
@NgModule({
  declarations: [ErrorDialogComponent, SearchbarComponent],
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
    EpochConverterService,
    StateManagerService,
    StringParserService,
  ],
  exports: [
    ErrorDialogComponent,
    SearchbarComponent,
  ],
})
export class SharedModule {}
