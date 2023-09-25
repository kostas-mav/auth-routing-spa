import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `<img class="animal-image" [src]="imgUrl" alt="Animal_Image" />`,
  styles: [
    `
      :host {
        img {
          width: 250px;
          height: 250px;
          object-fit: cover;
        }

        /* Media query for screens narrower than 768px */
        @media (max-width: 768px) {
          img {
            width: 150px;
            height: 150px;
          }
        }
      }
    `,
  ],
})
export class CardComponent {
  @Input({ required: true }) imgUrl!: string;
}
