import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthFacade } from 'src/app/auth/data-access/auth.facade';

@Injectable({ providedIn: 'root' })
class IsAuthenticatedGuard {
  private authFacade = inject(AuthFacade);
  private router = inject(Router);

  canActivate() {
    return this.authFacade.isLoggedIn$.pipe(
      map((isLoggedIn) => {
        const localyStoredUser = localStorage.getItem('kostas-spa-user');

        // If the user is not logged in and there's no user stored in
        // local-storage reroute to '/login'.
        // Otherwise load the page
        if (!isLoggedIn && !localyStoredUser) {
          return this.router.createUrlTree(['/login']);
        } else {
          return true;
        }
      })
    );
  }
}

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
  return inject(IsAuthenticatedGuard).canActivate();
};
