import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactDialogComponent } from './contact-dialog';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact-button',
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  template: `
    <button mat-raised-button color="primary" (click)="openDialog()">
      Contato
    </button>
  `,
})
export class ContactButton {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ContactDialogComponent, {
      width: '90%',
      maxWidth: '600px',
      panelClass: 'contact-dialog',
    });
  }
}
