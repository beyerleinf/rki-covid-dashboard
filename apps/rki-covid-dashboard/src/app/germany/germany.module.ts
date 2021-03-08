import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RkiEchartsModule } from '@rkicovid/rki-echarts';
import { RkiUiModule } from '@rkicovid/rki-ui';
import { SharedMaterialModule } from '../shared-material.module';
import { GermanyComponent } from './components';
import { GermanyRoutingModule } from './germany-routing.module';

@NgModule({
  declarations: [GermanyComponent],
  imports: [
    CommonModule,
    GermanyRoutingModule,
    SharedMaterialModule,
    RkiUiModule,
    RkiEchartsModule,
    TranslateModule.forChild(),
  ],
})
export class GermanyModule {}
