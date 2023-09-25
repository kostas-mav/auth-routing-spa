import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleTheme, ThemeService } from './theme.service';

@Component({
  selector: 'app-sticky-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="info">
      <div *ngIf="theme$ | async as theme" class="theme-toggle">
        <i
          *ngIf="theme === 'dark'"
          class="las la-sun"
          (click)="toggleTheme(theme)"
        ></i>
        <i
          *ngIf="theme === 'light'"
          class="las la-adjust"
          (click)="toggleTheme(theme)"
        ></i>
      </div>

      <ul>
        <li class="flex items-center gap-1">
          <i class="lab la-github"></i>
          <a href="https://github.com/kostas-mav" target="_blank">GitHub</a>
        </li>

        <li class="flex items-center gap-1">
          <i class="lab la-linkedin"></i>
          <a href="https://www.linkedin.com/in/kostasmavr/" target="_blank">
            LinkedIn
          </a>
        </li>

        <li class="flex items-center gap-1">
          <i class="las la-at"></i>
          <a href="mailto:kostasmavrokou@gmail.com">Email</a>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      .info {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
        position: fixed;
        bottom: 1.5rem;
        left: 1.5rem;

        .theme-toggle {
          height: fit-content;
          i {
            background-color: var(--tertiary);
            border: 1px solid black;
            border-radius: 100%;
            cursor: pointer;
            font-size: 2rem;
          }
        }

        ul {
          padding: 10px 1.5rem;
          background-color: var(--primary);
          color: #fff;
          border: none;
          border-radius: 0.5rem;
          @apply dark:bg-dark-primary;
        }
      }
    `,
  ],
})
export class StickyInfoComponent implements OnInit {
  themeService = inject(ThemeService);

  readonly theme$ = this.themeService.theme$;

  toggleTheme(theme: StyleTheme) {
    if (theme === 'light') {
      this.themeService.setDarkTheme();
    } else {
      this.themeService.setLightTheme();
    }
  }

  ngOnInit(): void {
    this.themeService.getTheme();
  }
}
