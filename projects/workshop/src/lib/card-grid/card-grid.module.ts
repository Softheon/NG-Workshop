import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './card-grid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cardgrid', component: CardGridComponent}];

/** The Card Grid Module */
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      routes,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [CardGridComponent],
  exports: [CardGridComponent]
})
export class CardGridModule { }
