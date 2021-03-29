import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '../shared-material.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { StatesComponent } from './components';
import { StatesRoutingModule } from './states-routing.module';

@NgModule({
  declarations: [StatesComponent],
  imports: [CommonModule, StatesRoutingModule, SharedComponentsModule, SharedMaterialModule],
})
export class StatesModule {}
