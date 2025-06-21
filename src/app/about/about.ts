import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `<h1>Sobre Nós</h1>
    <p>Conheça mais sobre a nossa equipe e projeto.</p>`,
  styles: [
    `
      :host {
        display: block;
        padding: 1rem;
      }
    `,
  ],
})
export class AboutComponent {}
