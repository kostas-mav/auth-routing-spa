import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Subject } from 'rxjs';
import { TextInputComponent } from 'src/app/shared/components/inputs/text-input/text-input.component';
import { TextEditorComponent } from 'src/app/shared/components/inputs/text-editor/text-editor.component';

export type FormFieldControlsGroup = {
  id: FormControl<string>;
  name: FormControl<string>;
  content: FormControl<string>;
};

@Component({
  selector: 'app-form-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextInputComponent,
    TextEditorComponent,
  ],
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
  fb = inject(NonNullableFormBuilder);

  @Input({ required: true }) fieldControlsGroup!: FormFieldControlsGroup;

  @Output() remove = new Subject<null>();
}
