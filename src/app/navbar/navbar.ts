// navbar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <nav>
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a routerLink="/about">Sobre</a></li>
        <li><a routerLink="/services">Serviços</a></li>
        <li><a routerLink="/contact">Contato</a></li>
      </ul>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
        background-color: #f0f0f0;
        padding: 1rem;
      }

      nav ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      nav a {
        text-decoration: none;
        color: #333;
      }

      nav a:hover {
        text-decoration: underline;
      }
    `,
  ],
})
export class NavbarComponent {}
