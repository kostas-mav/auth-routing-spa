import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../shared/components/card/card.component';
import { DataAccessStore } from './data-access/data-access-store';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Subject, take, takeUntil, tap } from 'rxjs';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TooltipComponent } from '../shared/components/tooltip/tooltip.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NumberInputComponent } from '../shared/components/inputs/number/number-input.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardComponent,
    InfiniteScrollModule,
    TooltipComponent,
    MatTooltipModule,
    NumberInputComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<null>();
  private dataAccessStore = inject(DataAccessStore);
  private fb = inject(NonNullableFormBuilder);

  @Input() limitControl = this.fb.control(20);

  readonly tooltipMessage =
    "This has been created using the 'https://dog.ceo' API. Libraries used include: Angular Material, ngx-infinite-scroll, line-awesome icons and TailwindCSS. State management for this component is done with the very powerful and compact NGRX Component Store";
  imgUrls$ = this.dataAccessStore.items$;

  loadMore() {
    this.dataAccessStore.loadMore();
  }

  ngOnInit(): void {
    this.dataAccessStore.limit$
      .pipe(
        take(1),
        tap((limit) => this.limitControl.setValue(limit, { emitEvent: false }))
      )
      .subscribe();

    this.limitControl.valueChanges
      .pipe(
        takeUntil(this._destroy$),
        tap((limit) => this.dataAccessStore.setLimit(limit))
      )
      .subscribe();

    this.dataAccessStore.getImages();
  }

  ngOnDestroy(): void {
    /**
     * Unsubscribe to all of this component's active subscriptions.
     */
    this._destroy$.next(null);
  }
}
