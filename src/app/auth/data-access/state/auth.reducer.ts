import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { User } from '../models';

/**
 * A custom method to transform the properties of an object to be possibly null
 */
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

interface AuthState {
  user: Nullable<User>;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: {
    id: null,
    name: null,
    email: null,
    createdAt: null,
    updatedAt: null,
  },
  isLoggedIn: false,
};

/**
 * Another method that removed much of the boilerplate from previous NGRX methods,
 * createFeature lets us create a store feature with fewer and more concise lines.
 * On top of that we can also ommit the selectors file and create our store item
 * references directly in the facade.
 */
export const AuthFeature = createFeature({
  name: 'Auth',
  reducer: createReducer(
    initialState,

    on(AuthActions.login, (state, action) => ({ ...initialState })),

    on(AuthActions.loginSuccess, (state, { user }) => ({
      ...state,
      user,
      isLoggedIn: true,
    })),

    on(AuthActions.loginFailure, (state, action) => ({
      ...initialState,
      isLoggedIn: false,
    })),

    on(AuthActions.logout, (state, action) => ({
      ...initialState,
      isLoggedIn: false,
    })),

    on(AuthActions.setUser, (state, { user }) => ({
      ...state,
      user,
      isLoggedIn: true,
    }))
  ),
});
