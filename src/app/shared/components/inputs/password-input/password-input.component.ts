import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { ngCVAProvider } from 'src/app/shared/utils/control-value-accessor-provider';

@Component({
  selector: 'mdd-password-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ngCVAProvider(PasswordInputComponent)],
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.scss'],
})
export class PasswordInputComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  constructor(private fb: NonNullableFormBuilder) {}

  private _destroy$ = new Subject<void>();

  @Input() label = '';
  @Input() placeholder = '';
  @Input() control = this.fb.control('');

  passwordVisible = false;
  type: 'text' | 'password' = 'password';
  toggleVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
    this.type = this.passwordVisible ? 'text' : 'password';
  }

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.control.setValue(value);
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(
        takeUntil(this._destroy$),
        tap((val) => {
          this.onChange(val);
          this.onTouched();
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
