import { Route } from '@angular/router';

export const DYNAMIC_FORM_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./dynamic-form.component').then((m) => m.DynamicFormComponent),
  },
];
