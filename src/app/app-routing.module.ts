import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedLayoutComponent } from './shared/layout/shared-layout/shared-layout.component';

const routes: Routes = [
  {
    path: 'maps',
    loadChildren: () => import('./maps/maps.module').then((m) => m.MapsModule),
  },
  {
    path: '**',
    redirectTo: 'maps',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
