import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AuthFacade } from 'src/app/auth/data-access/auth.facade';
import { FullButtonComponent } from 'src/app/shared/components/buttons/full-button/full-button.component';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule, FullButtonComponent],
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent {
  authFacade = inject(AuthFacade);

  logout() {
    this.authFacade.logout();
  }
}
