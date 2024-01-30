import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { NumberComponent } from './number/number.component';
import { AllVersionsComponent } from './all-versions/all-versions.component';
import { VersionsRoutingModule } from './versions-routing.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { TogglerModule } from 'src/app/components/toggler/toggler.module';


@NgModule({
  declarations: [
    ListComponent,
    NumberComponent,
    AllVersionsComponent
  ],
  imports: [
    CommonModule, VersionsRoutingModule, SpinnerModule, TogglerModule
  ]
})
export class VersionsModule { }
