/**
 * The following code would be used if this app was built using the default
 * angular component structure and not standalone app.component
 *
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 * import { AppModule } from './app/app.module';
 *
 * platformBrowserDynamic().bootstrapModule(AppModule)
 * .catch(err => console.error(err));
 */

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { provideStore, provideState } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AuthFeature } from './app/auth/data-access/state/auth.reducer';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from './app/auth/data-access/state/auth.effects';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    provideStore(),
    provideState(AuthFeature.name, AuthFeature.reducer),
    provideEffects(AuthEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: true }),
  ],
});
