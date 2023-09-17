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
  selector: 'app-text-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ngCVAProvider(TextInputComponent)],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  constructor(private fb: NonNullableFormBuilder) {}

  private _destroy$ = new Subject<void>();

  @Input() type: 'text' | 'password' | 'email' = 'text';
  @Input() label = '';
  @Input() placeholder = '';
  @Input() control = this.fb.control('');

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
