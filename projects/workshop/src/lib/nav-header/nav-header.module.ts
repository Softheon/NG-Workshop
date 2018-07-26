import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './nav-header.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: 'navheader', component: HeaderComponent}];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
