import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsComponent } from './docs.component';
import { FooterComponent } from './footer/footer.component';
import { ResolutionComponent } from './resolution/resolution.component';
import { VersionsComponent } from './versions/versions.component';
import { HeaderComponent } from './header/header.component';
import { GovernmentComponent } from './government/government.component';

const routes: Routes = [
  {
    path: 'docs',
    component: DocsComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
    loadChildren: () =>
      import('./footer/footer.module').then((m) => m.FooterModule),
  },
  {
    path: 'resolution',
    component: ResolutionComponent,
    loadChildren: () =>
      import('./resolution/resolution.module').then((m) => m.ResolutionModule),
  },
  {
    path: 'versions',
    component: VersionsComponent,
    loadChildren: () =>
      import('./versions/versions.module').then((m) => m.VersionsModule),
  },
  {
    path: 'header',
    component: HeaderComponent,
    loadChildren: () =>
      import('./header/header.module').then((m) => m.HeaderModule),
  },
  {
    path: 'government-areas',
    component: GovernmentComponent,
    loadChildren: () =>
      import('./government/government.module').then((m) => m.GovernmentModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule {}
