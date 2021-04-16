import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedMaterialModule } from '../shared-material.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { DistrictsComponent } from './components';
import { DistrictsRoutingModule } from './districts-routing.module';

@NgModule({
  declarations: [DistrictsComponent],
  imports: [
    CommonModule,
    DistrictsRoutingModule,
    SharedMaterialModule,
    SharedComponentsModule,
    TranslateModule.forChild(),
    ReactiveFormsModule,
  ],
})
export class DistrictsModule {}
