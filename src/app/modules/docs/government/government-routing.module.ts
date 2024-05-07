import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreasAllDataComponent } from './areas-all-data/areas-all-data.component';
import { AreasByIdModule } from './areas-by-id/areas-by-id.module';
import { AreasComponent } from './areas/areas.component';
import { AreasByIdComponent } from './areas-by-id/areas-by-id.component';

const routes: Routes = [
  {
    path: 'all',
    component: AreasAllDataComponent,
    loadChildren: () =>
      import('./areas-all-data/areas-all-data.module').then(
        (m) => m.AreasAllDataModule
      ),
  },
  {
    path: 'areas',
    component: AreasComponent,
    loadChildren: () =>
      import('./areas/areas.module').then((m) => m.AreasModule),
  },
  {
    path: 'areas-by-id',
    component: AreasByIdComponent,
    loadChildren: () =>
      import('./areas-by-id/areas-by-id.module').then((m) => m.AreasByIdModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GovernmentRoutingModule {}
