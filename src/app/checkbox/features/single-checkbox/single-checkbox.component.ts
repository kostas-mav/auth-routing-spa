import { Component, Input, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputLabelComponent } from 'src/app/shared/components/input-label/input-label.component';
import { ngCVAProvider } from 'src/app/shared/utils/control-value-accessor-provider';
import { BasicCheckboxTreeStore } from 'src/app/shared/components/checkbox-tree/data-access/basic-checkbox-tree.store';
import { CheckboxComponent } from 'src/app/shared/components/checkbox/checkbox.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-single-checkbox',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CheckboxComponent,
    InputLabelComponent,
  ],
  providers: [ngCVAProvider(SingleCheckboxComponent), BasicCheckboxTreeStore],
  template: `
    <app-input-label>{{ label }}</app-input-label>

    <app-checkbox [formControl]="control" (onChange)="toggleName($event)">
      {{ checkboxContent }}
    </app-checkbox>
  `,
})
export class SingleCheckboxComponent
  implements ControlValueAccessor, OnDestroy
{
  private fb = inject(NonNullableFormBuilder);

  @Input() label!: string;

  readonly defaultOption = 'Me?';
  readonly defaultOptionTransformed = 'Hell yeah, YOU are!';

  checkboxContent = this.defaultOption;

  control = this.fb.control(false);

  toggleName(checked: boolean) {
    this.checkboxContent = checked
      ? this.defaultOptionTransformed
      : this.defaultOption;
  }

  writeValue(value: boolean): void {
    this.control.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.control.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.control.valueChanges.pipe(takeUntil(this._destroy$)).subscribe(fn);
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.control.disable() : this.control.enable();
  }

  private _destroy$ = new Subject();

  ngOnDestroy() {
    this._destroy$.next(null);
  }
}
