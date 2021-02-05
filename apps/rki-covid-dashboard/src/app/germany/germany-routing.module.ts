import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GermanyComponent } from './components';

const routes: Routes = [{ path: '', component: GermanyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GermanyRoutingModule {}
