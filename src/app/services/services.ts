import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `<h1>Nossos Serviços</h1>
    <p>Descubra os serviços que oferecemos.</p>`,
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
      }
    `,
  ],
})
export class ServicesComponent {}
