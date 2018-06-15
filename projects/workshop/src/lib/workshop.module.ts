import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepperModule } from './multi-stepper/multi-stepper.module';
import { CardGridModule } from './card-grid/card-grid.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiStepperModule, CardGridModule],
  exports: [MultiStepperModule, CardGridModule]
})
export class WorkshopModule { }
