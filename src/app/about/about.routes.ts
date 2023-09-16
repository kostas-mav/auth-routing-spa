import { Route } from '@angular/router';

export const ABOUT_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./about.component').then((m) => m.AboutComponent),
  },
];
