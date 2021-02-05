import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DistrictsComponent } from './components';
import { DistrictsRoutingModule } from './districts-routing.module';

@NgModule({
  declarations: [DistrictsComponent],
  imports: [CommonModule, DistrictsRoutingModule],
})
export class DistrictsModule {}
