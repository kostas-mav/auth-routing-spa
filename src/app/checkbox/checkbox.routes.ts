import { Route } from '@angular/router';

export const CHECKBOX_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./checkbox.component').then((m) => m.CheckboxPageComponent),
  },
];
