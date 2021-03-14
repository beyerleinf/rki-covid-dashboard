import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EchartsModule } from '../echarts/echarts.module';
import { SharedMaterialModule } from '../shared-material.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { GermanyComponent } from './components';
import { GermanyRoutingModule } from './germany-routing.module';

@NgModule({
  declarations: [GermanyComponent],
  imports: [
    CommonModule,
    GermanyRoutingModule,
    EchartsModule,
    SharedComponentsModule,
    SharedMaterialModule,
    TranslateModule.forChild(),
  ],
})
export class GermanyModule {}
