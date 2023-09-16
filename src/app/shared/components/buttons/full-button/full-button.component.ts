import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[mddFullButton]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
        gap: 1rem;

        border: solid 1px transparent;
        background-color: #f5f5f5;
        border-radius: 6px;
        padding: 0.25rem 0.5rem;
      }
    `,
  ],
})
export class FullButtonComponent {}
