import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export type StyleTheme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService extends ComponentStore<{
  theme: StyleTheme;
}> {
  constructor() {
    super({
      theme: 'light',
    });
  }

  readonly theme$ = this.select((state) => state.theme);

  setDarkTheme() {
    localStorage.setItem('kostas-theme', 'dark');
    this.patchState({ theme: 'dark' });
    const html = document.querySelector('html');
    html!.classList.toggle('dark');
  }

  setLightTheme() {
    localStorage.removeItem('kostas-theme');
    this.patchState({ theme: 'light' });
    const html = document.querySelector('html');
    html!.classList.toggle('dark');
  }

  getTheme() {
    const theme = localStorage.getItem('kostas-theme');

    if (theme) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }
}
