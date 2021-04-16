import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared-material.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { StatesComponent } from './components';
import { StatesRoutingModule } from './states-routing.module';

@NgModule({
  declarations: [StatesComponent],
  imports: [CommonModule, StatesRoutingModule, SharedComponentsModule, SharedMaterialModule, FormsModule],
})
export class StatesModule {}
