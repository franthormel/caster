import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';

import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    MenuToolbarComponent,
    ErrorDialogComponent,
    SearchbarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
  ],
  exports: [MenuToolbarComponent, ErrorDialogComponent, SearchbarComponent],
})
export class SharedModule {}
