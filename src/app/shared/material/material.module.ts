import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [MatGridListModule, MatMenuModule],
  exports: [MatGridListModule, MatMenuModule],
})
export class MaterialModule {}
