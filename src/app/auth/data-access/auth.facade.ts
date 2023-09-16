import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthFeature } from './state/auth.reducer';
import { LoginCredentials, User } from './models';
import { AuthActions } from './state/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private store = inject(Store);

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
