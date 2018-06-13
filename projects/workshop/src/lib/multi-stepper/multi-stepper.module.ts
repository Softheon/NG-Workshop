import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiStepperComponent } from './multi-stepper.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [{ path: 'multistepper', component: MultiStepperComponent}];

/** The NG-Workshop Multi Stepper Module */
@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [MultiStepperComponent],
  exports: [MultiStepperComponent]
})
export class MultiStepperModule { }
