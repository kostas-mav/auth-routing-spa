import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginCredentials, User } from '../models';

/**
 * Using the createActionGroup method we get rid of much of the boilerplate
 * code needed in the older NGRX action creation process of NGRX
 */

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
