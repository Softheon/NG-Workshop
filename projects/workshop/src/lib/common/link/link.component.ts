import { Component, OnInit, Input } from '@angular/core';
import { ILink } from './link';

/**
 * The Link Component
 */
@Component({
  selector: 'sws-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  /** The Data Input */
  @Input() public linkData: ILink;

  constructor() { }

  ngOnInit() {
  }

}
