import { Component, Input, OnInit } from '@angular/core';
import { IFooter, FooterConfig } from './footer';

/** The Footer Component */
@Component({
  selector: 'sws-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  /** The Data Input */
  @Input() public footerData: IFooter;

  /** The Data Input */
  @Input() public config: FooterConfig;

  constructor() { }

  ngOnInit() {}

}
