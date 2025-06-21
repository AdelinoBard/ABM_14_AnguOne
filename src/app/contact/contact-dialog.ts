import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact-dialog',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
  ],
  template: `
    <div class="contact-container">
      <h1>Contato</h1>

      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nome</mat-label>
          <input matInput formControlName="name" required />
          <mat-error
            *ngIf="
              contactForm.get('name')?.invalid &&
              contactForm.get('name')?.touched
            "
          >
            Nome é obrigatório
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" required type="email" />
          <mat-error
            *ngIf="
              contactForm.get('email')?.invalid &&
              contactForm.get('email')?.touched
            "
          >
            Email válido é obrigatório
          </mat-error>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Mensagem</mat-label>
          <textarea matInput formControlName="message" required></textarea>
          <mat-error
            *ngIf="
              contactForm.get('message')?.invalid &&
              contactForm.get('message')?.touched
            "
          >
            Mensagem é obrigatória
          </mat-error>
        </mat-form-field>

        <button
          mat-raised-button
          color="primary"
          type="submit"
          [disabled]="contactForm.invalid"
        >
          Enviar
        </button>
      </form>

      <div *ngIf="submitted" class="success-message">
        Obrigado por entrar em contato! Retornaremos em breve.
      </div>
    </div>
  `,
  styles: [
    `
      .contact-container {
        padding: 24px;
        max-width: 600px;
        margin: auto;
      }

      h1 {
        text-align: center;
        margin-bottom: 24px;
      }

      .full-width {
        width: 100%;
        margin-bottom: 16px;
      }

      .success-message {
        margin-top: 24px;
        background: #d4edda;
        color: #155724;
        padding: 16px;
        border-radius: 8px;
        text-align: center;
      }
    `,
  ],
})
export class ContactDialogComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Dados enviados:', this.contactForm.value);
      this.submitted = true;
      this.contactForm.reset();

      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    }
  }
}
