import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'AnguOne - Home',
    loadComponent: () => import('./home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    title: 'AnguOne - Sobre',
    loadComponent: () => import('./about/about').then((m) => m.AboutComponent),
  },
  {
    path: 'contact',
    title: 'AnguOne - Contato',
    loadComponent: () =>
      import('./contact/contact-page').then((m) => m.ContactPageComponent),
  },
  {
    path: 'services',
    title: 'AnguOne - Serviços',
    loadComponent: () =>
      import('./services/services').then((m) => m.ServicesComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
