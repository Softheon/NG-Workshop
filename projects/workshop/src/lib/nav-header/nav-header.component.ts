import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter, HostListener, ViewChild, ElementRef } from '@angular/core';
import { INavigation, NavConfig } from './nav';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { InnerWidthService } from '../common/inner-width.service';

/**
 * The Navigation Header Component
 */
@Component({
  selector: 'sws-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css'],
  animations: [
    trigger('toggleH', [
      state('true', style({ opacity: 1, transform: 'translateX(0)' })),
      state('void', style({ opacity: .7, transform: 'translateX(-300px)' })),
      transition(':enter', animate('450ms ease-in-out')),
      transition(':leave', animate('450ms ease-in-out'))
    ]),
    trigger('toggleV', [
      state('true', style({ opacity: 1, maxHeight: '800px' })),
      state('void', style({ opacity: .7, maxHeight: '0' })),
      transition(':enter', animate('450ms ease-in-out')),
      transition(':leave', animate('450ms ease-in-out'))
    ])
  ],
})
export class NavHeaderComponent implements OnInit, AfterViewInit  {
  /** The Data Input */
  @Input() public navData: INavigation;

  /** The Configruation Input */
  @Input() public config: NavConfig;

  /** The Configruation Input */
  @Output() public searchCriteria: EventEmitter<any> = new EventEmitter<any>();

  /** Displays the left menu */
  public leftMenu = false;

  /** Displays the user menu */
  public userMenu = false;

  /** The search bar input */
  public searchInput = '';

  /** Display the Search Bar */
  public showSearchBar = false;

  /** The Search Bar Max Width*/
  public maxWidth = 'calc(100vw - 345px)';

  /** Responsiveness - Tablet Screen Boolean */
  public tabletScreen: boolean;

   /**
   * The Constructor - Subscribes to router events and gets the current page
   * @param innerWidthService the inner width service
   */
  constructor(private innerWidthService: InnerWidthService, private eRef: ElementRef) {
    window.addEventListener('resize', () => {
      this.innerWidthService.setScreenSizes();
      this.tabletScreen = this.innerWidthService.tabletScreen;
    });
  }

  /** For Calculating the Header Width for the Search Bar */
  @ViewChild('headerContent')
  headerContent: ElementRef;

  /** For auto-closing the left menu and user menus when clicking off of the component */
  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      return;
    } else {
      // close menus
      if (this.userMenu || this.leftMenu) {
        this.userMenu = false;
        this.leftMenu = false;
      }
    }
  }

  /**
   * On Init
  */
  ngOnInit() {
    this.innerWidthService.setScreenSizes();
    this.tabletScreen = this.innerWidthService.tabletScreen;

    // define config
    if (!this.config) {
      this.config = new NavConfig();
    }
    // if (this.config.displayAppMenu !== true) {
    //   this.maxWidth = 'calc(100vw - 280px)';
    // }
  }

  /** After View Init */
  ngAfterViewInit() {
    this.calculateHeaderWidth();
  }

  /**
   * Watches for window resizing and captures the screen size
   * https://stackoverflow.com/questions/45350716/detect-window-size-using-angular-4
   * @param event the resize event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.calculateHeaderWidth();
  }

  /** Calculates the header width for the dynamic search bar menu */
  public calculateHeaderWidth(): void {
    const offest = this.headerContent.nativeElement.offsetWidth;
    this.maxWidth = `calc(100vw - ${offest}px)`;
  }

  /** If user hits enter or escape key in search bar */
  public keyDownFunction(event): void {
    if (event.keyCode === 13) {
      this.searchCriteria.emit(this.searchInput);
    } else if (event.keyCode === 27) {
      this.showSearchBar = false;
    }
  }
}
