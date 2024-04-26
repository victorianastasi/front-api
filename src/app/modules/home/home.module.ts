import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { OCardModule } from '@gcba/ngx-obelisco/card';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, OCardModule],
})
export class HomeModule {}
