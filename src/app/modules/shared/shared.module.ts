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
  exports: [ErrorDialogComponent, SearchbarComponent],
})
export class SharedModule {}