import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

/**
 * Import to use any Angular Material components added to the app
 */

@NgModule({
  imports: [MatGridListModule, MatMenuModule],
  exports: [MatGridListModule, MatMenuModule],
})
export class MaterialModule {}
