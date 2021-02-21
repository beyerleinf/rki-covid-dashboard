import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatesComponent } from './components';
import { StatesRoutingModule } from './states-routing.module';

@NgModule({
  declarations: [StatesComponent],
  imports: [CommonModule, StatesRoutingModule],
})
export class StatesModule {}
