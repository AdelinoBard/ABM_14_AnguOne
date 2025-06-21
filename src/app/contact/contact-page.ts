import { Component } from '@angular/core';
import { ContactButton } from './contact-button';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, ContactButton],
  template: `
    <section style="text-align: center; margin-top: 50px;">
      <h2>Fale Conosco</h2>
      <app-contact-button></app-contact-button>
    </section>
  `,
})
export class ContactPageComponent {}
