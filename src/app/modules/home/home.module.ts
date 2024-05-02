import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { OCardModule } from 'ngx-obelisco-example/card';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, OCardModule],
})
export class HomeModule {}
