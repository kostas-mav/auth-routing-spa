import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { ngCVAProvider } from 'src/app/shared/utils/control-value-accessor-provider';

export interface SelectOptionItem {
  id: string | number;
  name: string;
  disabled?: boolean;
  icon?: string;
}

@Component({
  selector: 'app-select-option',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [ngCVAProvider(SelectOptionComponent)],
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss'],
})
export class SelectOptionComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  constructor(
    private fb: NonNullableFormBuilder,
    private elRef: ElementRef,
    private cdRef: ChangeDetectorRef
  ) {}

  private _destroy$ = new Subject<void>();

  @Input() skipCVA: boolean = false;
  @Input() options!: SelectOptionItem[];
  @Input() action!: (arg: any) => void;
  @Input() label = '';
  @Input() placeholder = '';
  @Input() control: FormControl<string | number> = this.fb.control('');

  @HostListener('document:click', ['$event'])
  documentClickHandler(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    const isInsideComponent = this.elRef.nativeElement.contains(clickedElement);
    if (!isInsideComponent) {
      this.displayOptions = false;
    }
  }

  componentDisabled: boolean = false;
  selectedOptionItem!: SelectOptionItem;
  displayOptions: boolean = false;

  selectOptionHandler(option: SelectOptionItem) {
    if (option.id === this.selectedOptionItem.id) return;
    if (option.disabled) return;

    if (this.action) this.action(option.id);

    this.selectedOptionItem = option;
    this.control.setValue(option.id);
    this.onChange(option.id);
    this.onTouched();
    this.toggleOptions();
    this.cdRef.detectChanges();
  }

  toggleOptions() {
    this.displayOptions = !this.displayOptions;
    this.onTouched();
  }

  onChange = (arg: any) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.options.forEach((option) => {
      if (option.id === value) {
        this.selectedOptionItem = option;
        this.control.setValue(value);
      }
    });
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
    if (this.skipCVA)
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
