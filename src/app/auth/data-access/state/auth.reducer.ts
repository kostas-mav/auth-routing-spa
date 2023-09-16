import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthActions } from './auth.actions';
import { User } from '../models';

interface AuthState {
  user: Nullable<User>;
  isLoggedIn: boolean;
}

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

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
