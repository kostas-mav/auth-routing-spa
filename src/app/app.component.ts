import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StickyInfoComponent } from './sticky-info/sticky-info.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, StickyInfoComponent],
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <app-sticky-info></app-sticky-info>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
