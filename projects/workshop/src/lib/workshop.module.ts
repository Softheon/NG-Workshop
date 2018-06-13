import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepperModule } from './multi-stepper/multi-stepper.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiStepperModule],
  exports: [MultiStepperModule]
})
export class WorkshopModule { }
