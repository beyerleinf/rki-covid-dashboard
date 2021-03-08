import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/germany' },
  {
    path: 'germany',
    loadChildren: () => import(/* webpackChunkName: 'germany' */ './germany/germany.module').then(m => m.GermanyModule),
  },
  {
    path: 'states',
    loadChildren: () => import(/* webpackChunkName: 'states' */ './states/states.module').then(m => m.StatesModule),
  },
  {
    path: 'districts',
    loadChildren: () =>
      import(/* webpackChunkName: 'districts' */ './districts/districts.module').then(m => m.DistrictsModule),
  },
  {
    path: 'vaccinations',
    loadChildren: () =>
      import(/* webpackChunkName: 'vaccinations' */ './vaccinations/vaccinations.module').then(
        m => m.VaccinationsModule
      ),
  },
  { path: '**', redirectTo: '/germany' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
