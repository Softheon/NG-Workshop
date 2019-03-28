import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollProgressIndicatorComponent } from './scroll-progress-indicator.component';

@NgModule({
  declarations: [ScrollProgressIndicatorComponent],
  imports: [
    CommonModule
  ],
  exports: [ScrollProgressIndicatorComponent]
})
export class ScrollProgressModule { }
