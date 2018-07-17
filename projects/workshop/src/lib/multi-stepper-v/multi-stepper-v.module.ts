import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepperVComponent } from './multi-stepper-v.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MultiStepperVComponent],
  exports: [MultiStepperVComponent]
})
export class MultiStepperVModule { }
