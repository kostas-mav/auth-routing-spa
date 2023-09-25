import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthActions } from './auth.actions';
import { map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private router = inject(Router);

  /**
   * As there is no actual database to save or serve user data,
   * the local storage is enough for this presentational showcase.
   */

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      map(({ credentials }) =>
        AuthActions.loginSuccess({
          user: User.create({ id: uuid(), email: credentials.email }),
        })
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ user }) => {
          localStorage.setItem('kostas-spa-user', user.id);
          this.router.navigate(['']);
        }),
        map(({ user }) => AuthActions.setUser({ user }))
      ),
    { dispatch: false }
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('kostas-spa-user');
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false }
  );
}
