import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginCredentials, User } from '../models';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    Login: props<{ credentials: LoginCredentials }>(),
    'Login Success': props<{ user: User }>(),
    'Login Failure': props<{ error: Error }>(),
    Logout: emptyProps(),
    'Set User': props<{ user: User }>(),
  },
});
