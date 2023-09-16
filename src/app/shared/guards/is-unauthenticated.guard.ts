import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { of, switchMap, take } from 'rxjs';
import { AuthFacade } from 'src/app/auth/data-access/auth.facade';
import { User } from 'src/app/auth/data-access/models';

@Injectable({ providedIn: 'root' })
class IsUnauthenticatedGuard {
  private router = inject(Router);
  private authFacade = inject(AuthFacade);

  canActivate() {
    return this.authFacade.isLoggedIn$.pipe(
      take(1),
      switchMap((isLoggedIn) => {
        const localyStoredUser = localStorage.getItem('kostas-spa-user');

        if (localyStoredUser)
          this.authFacade.setUser(User.create({ id: localyStoredUser }));

        if (isLoggedIn) {
          return of(this.router.createUrlTree(['/about']));
        } else {
          return of(true);
        }
      })
    );
  }
}

export const isUnauthenticatedGuard: CanActivateFn = (route, state) => {
  return inject(IsUnauthenticatedGuard).canActivate();
};
