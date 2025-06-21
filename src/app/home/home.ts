import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `<h1>Bem-vindo ao AnguOne!</h1>
    <p>Explore as páginas do projeto Angular.</p>`,
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
      }
    `,
  ],
})
export class HomeComponent {}
