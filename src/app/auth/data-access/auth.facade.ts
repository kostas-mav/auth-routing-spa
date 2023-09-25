import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthFeature } from './state/auth.reducer';
import { LoginCredentials, User } from './models';
import { AuthActions } from './state/auth.actions';

/**
 * Use a facade for simple interactions with this store throughout
 * the rest of the app. This way we can access and debug actions better
 * instead of using the generic store.{method} avenue.
 */

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private store = inject(Store);

  /**
   * Using the createFeature method in our reducer we can simply use the
   * select[Item] syntax to create an observable for that state property.
   */
  readonly user$ = this.store.select(AuthFeature.selectUser);
  readonly isLoggedIn$ = this.store.select(AuthFeature.selectIsLoggedIn);

  login(credentials: LoginCredentials) {
    this.store.dispatch(AuthActions.login({ credentials }));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  setUser(user: User) {
    this.store.dispatch(AuthActions.setUser({ user }));
  }
}
