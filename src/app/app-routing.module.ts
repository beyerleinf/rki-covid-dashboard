import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/germany' },
  { path: 'germany', loadChildren: () => import('./germany/germany.module').then(m => m.GermanyModule) },
  { path: 'vaccinations', loadChildren: () => import('./vaccinations/vaccinations.module').then(m => m.VaccinationsModule) },
  { path: '**', redirectTo: '/germany' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
