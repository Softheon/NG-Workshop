import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepperModule } from './multi-stepper/multi-stepper.module';
import { CardGridModule } from './card-grid/card-grid.module';
import { HeaderComponent } from './nav-header/nav-header.component';
import { FooterComponent } from './footer/footer.component';
import { LinkComponent } from './common/link/link.component';
import { MultiStepperVModule } from './multi-stepper-v/multi-stepper-v.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ScrollProgressModule } from './scroll-progress-indicator/scroll-progress-indicator.module';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MultiStepperModule,
    CardGridModule,
    HeaderComponent,
    FooterComponent,
    LinkComponent,
    MultiStepperVModule,
    BreadcrumbModule,
    ScrollProgressModule
  ],
  exports: [
    MultiStepperModule,
    CardGridModule,
    HeaderComponent,
    FooterComponent,
    MultiStepperVModule,
    BreadcrumbModule,
    ScrollProgressModule
  ]
})
export class WorkshopModule {}
