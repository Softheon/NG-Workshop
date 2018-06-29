import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepperModule } from './multi-stepper/multi-stepper.module';
import { CardGridModule } from './card-grid/card-grid.module';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiStepperModule, CardGridModule, NavHeaderComponent ],
  exports: [MultiStepperModule, CardGridModule, NavHeaderComponent]
})
export class WorkshopModule { }
