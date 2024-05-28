import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionComponent } from './introduction.component';

@NgModule({
  declarations: [IntroductionComponent],
  imports: [CommonModule],
  exports: [IntroductionComponent],
})
export class IntroductionModule {}
