import { Route } from '@angular/router';
import { isUnauthenticatedGuard } from './shared/guards/is-unauthenticated.guard';
import { isAuthenticatedGuard } from './shared/guards/is-authenticated.guard';

export const routes: Route[] = [
  {
    path: 'login',
    canActivate: [isUnauthenticatedGuard],
    loadComponent: () =>
      import('src/app/auth/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [isAuthenticatedGuard],
    loadComponent: () =>
      import('./layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'about',
        loadChildren: () =>
          import('src/app/about/about.routes').then((m) => m.ABOUT_ROUTES),
      },
      {
        path: 'checkbox',
        loadChildren: () =>
          import('src/app/checkbox/checkbox.routes').then(
            (m) => m.CHECKBOX_ROUTES
          ),
      },
      {
        path: 'dynamic-form',
        loadChildren: () =>
          import('src/app/dynamic-form/dynamic-form.routes').then(
            (m) => m.DYNAMIC_FORM_ROUTES
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('src/app/dashboard/dashboard.routes').then(
            (m) => m.DASHBOARD_ROUTES
          ),
      },
    ],
  },
];
