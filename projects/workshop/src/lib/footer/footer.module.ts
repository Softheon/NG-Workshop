import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RouterModule } from '@angular/router';
import { LinkComponent } from '../common/link/link.component';


/** The Footer Module */
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FooterComponent, LinkComponent],
  exports: [FooterComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FooterModule {}
