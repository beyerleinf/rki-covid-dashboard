import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/germany' },
  {
    path: 'germany',
    loadChildren: () =>
      import(/* webpackModuleName: 'germany' */ './germany/germany.module').then(m => m.GermanyModule),
  },
  {
    path: 'states',
    loadChildren: () => import(/* webpackModuleName: 'states' */ './states/states.module').then(m => m.StatesModule),
  },
  {
    path: 'districts',
    loadChildren: () =>
      import(/* webpackModuleName: 'districts' */ './districts/districts.module').then(m => m.DistrictsModule),
  },
  {
    path: 'vaccinations',
    loadChildren: () =>
      import(/* webpackModuleName: 'vaccinations' */ './vaccinations/vaccinations.module').then(
        m => m.VaccinationsModule
      ),
  },
  { path: '**', redirectTo: '/germany' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
