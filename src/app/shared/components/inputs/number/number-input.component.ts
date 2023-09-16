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
  selector: 'mdd-number-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ngCVAProvider(NumberInputComponent)],
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  constructor(private fb: NonNullableFormBuilder) {}

  private _destroy$ = new Subject<void>();
  @Input() min!: number;
  @Input() max!: number;

  @Input() label = '';
  @Input() placeholder = '';
  @Input() control = this.fb.control('');

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.control.setValue(value);
  }
  registerOnChange(fn: any): void {
    fn = this.onChange;
  }
  registerOnTouched(fn: any): void {
    fn = this.onTouched;
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
