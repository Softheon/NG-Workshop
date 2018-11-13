import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';

import {IBreadcrumb} from './breadcrumb';
import { InnerWidthService } from '../common/inner-width.service';
import { trigger, state, animate, transition, style } from '@angular/animations';

/**
 * The Breadcrumb Component
 */
@Component({
  selector: 'sws-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  animations: [
    trigger('toggleV', [
      state('true', style({ opacity: 1, maxHeight: '800px' })),
      state('void', style({ opacity: .1, maxHeight: '0' })),
      transition(':enter', animate('450ms ease-in-out')),
      transition(':leave', animate('450ms ease-in-out'))
    ])
  ],
})
export class BreadcrumbComponent implements OnInit {

  // TODO: Create boolean ie. collapsedBreadcrumbsBool to manually toggle between
  // full list vs collapsed breadcrumbs (ie if there's also quick links in header)
  // then display collapsed breadcrumbs!

  /** Displays the user menu */
  public breadcrumbMenu = false;

  /** Responsiveness - Tablet Screen Boolean */
  public tabletScreen: boolean;

  @Input() public headerBreadcrumbs = false;

  /** The Data Input */
  @Input() public breadcrumbData: IBreadcrumb;

  /** Whether or not to display dark theme */
  @Input() public darkTheme = false;

  /** For auto-closing the left menu and user menus when clicking off of the component */
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      return;
    } else {
      // close menus
      if (this.breadcrumbMenu) {
        this.breadcrumbMenu = false;
      }
    }
  }

   /**
   * The Constructor - Subscribes to router events and gets the current page
   * @param innerWidthService the inner width service
   */
  constructor(private innerWidthService: InnerWidthService, private eRef: ElementRef) {
    window.addEventListener('resize', () => {
      this.innerWidthService.setScreenSizes();
      this.tabletScreen = this.innerWidthService.largeTabletScreen;
    });
  }

  /** On Init */
  ngOnInit() {
    this.innerWidthService.setScreenSizes();
    this.tabletScreen = this.innerWidthService.largeTabletScreen;
  }

}
