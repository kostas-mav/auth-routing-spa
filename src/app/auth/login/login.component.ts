import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from 'src/app/shared/components/inputs/text-input/text-input.component';
import { FullButtonComponent } from 'src/app/shared/components/buttons/full-button/full-button.component';
import { PasswordInputComponent } from 'src/app/shared/components/inputs/password-input/password-input.component';
import { RouterModule } from '@angular/router';
import { AuthFacade } from '../data-access/auth.facade';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    PasswordInputComponent,
    FullButtonComponent,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private authFacade = inject(AuthFacade);
  private fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    email: ['email@you.org'],
    password: ['123456'],
  });

  login() {
    this.authFacade.login(this.form.getRawValue());
  }
}
