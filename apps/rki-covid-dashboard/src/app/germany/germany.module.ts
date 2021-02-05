import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GermanyComponent } from './components';
import { GermanyRoutingModule } from './germany-routing.module';

@NgModule({
  declarations: [GermanyComponent],
  imports: [CommonModule, GermanyRoutingModule],
})
export class GermanyModule {}
