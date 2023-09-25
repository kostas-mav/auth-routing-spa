import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CheckboxTreeComponent } from './ui/checkbox-tree/checkbox-tree.component';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ChipsCheckboxTreeComponent } from './ui/chips-checkbox-tree/chips-checkbox-tree.component';
import { SearchCheckboxTreeComponent } from './ui/search-checkbox-tree/search-checkbox-tree.component';
import { SingleCheckboxComponent } from './ui/single-checkbox/single-checkbox.component';
import { SINGLE_LEVEL_DATA } from 'src/mock/single-level-data';
import { DOUBLE_LEVEL_DATA } from 'src/mock/double-level-data';
import { MULTI_LEVEL_DATA } from 'src/mock/multi-level-data';
import { FullButtonComponent } from '../shared/components/buttons/full-button/full-button.component';

@Component({
  selector: 'app-checkbox-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SingleCheckboxComponent,
    CheckboxTreeComponent,
    SearchCheckboxTreeComponent,
    ChipsCheckboxTreeComponent,
    FullButtonComponent,
  ],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxPageComponent {
  private fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    single: false,
    singleLevel: [[]],
    doubleLevel: [[]],
    multiLevel: [[]],
    mixedLevel: [[]],
    search: [[]],
    chips: [[]],
    parentChips: [[]],
  });

  readonly singleLevelOptions = SINGLE_LEVEL_DATA;
  readonly doubleLevelOptions = DOUBLE_LEVEL_DATA;
  readonly multiLevelOptions = MULTI_LEVEL_DATA;

  logForm() {
    console.log(
      'All option values are passed as an array of IDs.',
      this.form.value
    );
  }
}
