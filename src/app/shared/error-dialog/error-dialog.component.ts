import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss'],
})
export class ErrorDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public error: Error,
    private clipboard: Clipboard
  ) {}

  ngOnInit() {
    console.error(this.error);
  }

  copyErrorMessage() {
    const message = `${this.name} — ${this.message}`;

    this.clipboard.copy(message);
  }

  get message(): string {
    return this.error.message;
  }

  get name(): string {
    return this.error.name;
  }
}
