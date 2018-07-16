import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';
import { RouterModule, Routes } from '@angular/router';

/** The Card Grid Module */
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CardGridComponent],
  exports: [CardGridComponent]
})
export class CardGridModule { }
