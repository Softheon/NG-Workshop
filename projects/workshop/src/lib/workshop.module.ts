import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepperModule } from './multi-stepper/multi-stepper.module';
import { CardGridModule } from './card-grid/card-grid.module';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { FooterComponent } from './footer/footer.component';
import { LinkComponent } from './common/link/link.component';
import { MultiStepperVModule } from './multi-stepper-v/multi-stepper-v.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MultiStepperModule, CardGridModule, NavHeaderComponent, FooterComponent, LinkComponent, MultiStepperVModule],
  exports: [MultiStepperModule, CardGridModule, NavHeaderComponent, FooterComponent, MultiStepperVModule]
})
export class WorkshopModule { }
