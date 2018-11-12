import { Component, OnInit, Input } from '@angular/core';

import {IBreadcrumb} from './breadcrumb';

@Component({
  selector: 'sws-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  /** The Data Input */
  @Input() public breadcrumbData: IBreadcrumb;

  /** Whether or not to display dark theme */
  @Input() public darkTheme = false;

  constructor() { }

  ngOnInit() {
    console.log(this.breadcrumbData);
  }

}
