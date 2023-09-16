import { Route } from '@angular/router';

export const PLACEHOLDER_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./placeholder.component').then((m) => m.PlaceholderComponent),
  },
];
