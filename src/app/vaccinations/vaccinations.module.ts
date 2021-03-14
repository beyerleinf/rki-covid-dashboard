import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EchartsModule } from '../echarts/echarts.module';
import { SharedMaterialModule } from '../shared-material.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { VaccinationsComponent } from './components';
import { VaccinationsRoutingModule } from './vaccinations-routing.module';

@NgModule({
  declarations: [VaccinationsComponent],
  imports: [
    CommonModule,
    VaccinationsRoutingModule,
    SharedMaterialModule,
    SharedComponentsModule,
    EchartsModule,
    TranslateModule.forChild(),
  ],
})
export class VaccinationsModule {}
