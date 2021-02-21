import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VaccinationsComponent } from './components';
import { VaccinationsRoutingModule } from './vaccinations-routing.module';

@NgModule({
  declarations: [VaccinationsComponent],
  imports: [CommonModule, VaccinationsRoutingModule],
})
export class VaccinationsModule {}
