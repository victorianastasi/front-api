import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoverComponent } from 'src/app/components/cover/cover.component';
import { CardComponent } from 'src/app/components/card/card.component';



@NgModule({
  declarations: [
    HomeComponent, 
    CoverComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
