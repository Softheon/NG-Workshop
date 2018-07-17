import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepperComponent } from './multi-stepper.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** The NG-Workshop Multi Stepper Module */
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [MultiStepperComponent],
  exports: [MultiStepperComponent]
})
export class MultiStepperModule { }
