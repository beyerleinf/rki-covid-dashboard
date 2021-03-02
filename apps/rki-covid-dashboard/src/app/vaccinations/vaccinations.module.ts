import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RkiUiModule } from '@rkicovid/rki-ui';
import { SharedMaterialModule } from '../shared-material.module';
import { VaccinationsComponent } from './components';
import { VaccinationsRoutingModule } from './vaccinations-routing.module';

@NgModule({
  declarations: [VaccinationsComponent],
  imports: [CommonModule, VaccinationsRoutingModule, RkiUiModule, SharedMaterialModule, TranslateModule.forChild()],
})
export class VaccinationsModule {}
