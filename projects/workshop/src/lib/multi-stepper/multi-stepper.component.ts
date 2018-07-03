import { Component, OnInit, Input, Output, HostListener, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, RouterLinkActive, NavigationEnd } from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations';
import { RootPage } from './page';
import { Page } from './page';
import { filter } from 'rxjs/operators';
import { InnerWidthService } from '../common/inner-width.service';
/** The Multi-Stepper Component */
@Component({
  selector: 'sws-multi-stepper',
  templateUrl: './multi-stepper.component.html',
  styleUrls: ['./multi-stepper.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(50%)', opacity: '0' }),
        animate(
          '300ms ease',
          style({ opacity: '1', transform: 'translateY(0%)' })
        )
      ]),
      transition(':leave', [
        animate(
          '300ms ease',
          style({ transform: 'translateY(50%)', opacity: '0' })
        )
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('300ms ease', style({ opacity: '1' }))
      ]),
      transition(':leave', [animate('300ms ease', style({ opacity: '0' }))])
    ])
  ]
})
export class MultiStepperComponent implements OnInit {

  /** The Data Input */
  @Input() public data;

  /** The Configruation Input */
  @Input() public config;

  /** The Current Step Output */
  @Output() public currentStep: EventEmitter<RootPage> = new EventEmitter<RootPage>();

  /** The Current SubStep Output */
  @Output() public currentSubStep: EventEmitter<Page> = new EventEmitter<Page>();

  /** The Current Index Output */
  @Output() public currentIndex: EventEmitter<object> = new EventEmitter<object>();

  /** The Complete Step Data Output */
  @Output() public stepData: EventEmitter<any> = new EventEmitter<any>();

  /** The step data blob object */
  private blob = [];

  /** Gets the page size */
  public innerWidth: any;

  /** Responsiveness Breakpoint */
  public largeScreen = false;

  /** The current root page */
  public currentRootPage: RootPage;

  /** The current page */
  public currentSubPage: Page;

  /** The current root page index */
  public currentRootPageIndex: number;

  /** The current sub page index */
  public currentSubPageIndex: number;

  /* the navigation pages data blob */
  public pages: RootPage[] = [];

  /** Configuration - the Vertical / Movile Navigation Menu Text */
  public navigationText = 'Navigation';

  /** Configuration - whether or not to display the navigation as vertical bar */
  public vertical: boolean;

  /** Configuration - The medium screen responsiveness breakpoint */
  public showLastNav = true;

  /** Configuration - whether or not to display the progress menu */
  public displayMenu = false;

  /** Configuration - whether or not to mark steps as completed */
  public markStepsCompleted = true;

  /** Configuration - whether or not to skip ahead from the current step */
  public skipAhead = true;

  /**
   * The Constructor - Subscribes to router events and gets the current page
   * @param router The Angular Router
   * @param innerWidthService the inner width service
   * @param route The Activated Route
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private innerWidthService: InnerWidthService
  ) {
      // subscribe to router event
      this.router.events
        // Ignore any events that are not Navigation End
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event) => {
          this.getRouteData();
      });
  }

  /**
   * On Init
   */
  ngOnInit() {
    this.innerWidthService.setScreenSizes();
    this.largeScreen = this.innerWidthService.largeScreen;
    this.showLastNavItem();

    /** Set up configurations */
    if (this.config !== undefined) {
      if (this.config.dir === 'v') {
        this.vertical = true;
      }
      if (this.config.showLastNav === false) {
        this.showLastNav = false;
      }
      if (this.config.markStepsCompleted === false) {
        this.markStepsCompleted = false;
      }
      if (this.config.skipAhead === false) {
        this.skipAhead = false;
      }

      this.navigationText = this.config.navTxt ? this.config.navTxt : this.navigationText;
    }

    /** Initialize Data */
    if (this.data !== undefined) {
      this.data.forEach((item, index) => {
        if (item !== undefined) {

          const subPages = [];

          if (item.subPages !== undefined) {
            item.subPages.forEach(p => {
              subPages.push(new Page(p.page, p.url));
            });
          }
          this.pages.push(new RootPage(item.page, item.url, subPages));
        } else {
          return false;
        }
      });
    }

    // If config set to true, on pageload display current progress
    if (this.markStepsCompleted) {
      let found;
      const routerUrl = this.router.url ? this.router.url : '';
      // truncate query parameters
      const url = (routerUrl && (routerUrl.match(/[?]/g) || []).length >= 1) ? routerUrl.substring(0, routerUrl.indexOf('?')) : routerUrl;
      // extract base url
      const baseUrl = (url && (url.match(/[/]/g) || []).length >= 2) ? url.substring(0, url.lastIndexOf('/')) : url;

      // Current Root Page
      this.currentRootPage = this.pages.find(c => c.routerLink === `.${baseUrl}`);
      this.currentRootPageIndex = this.pages.findIndex(c => c.routerLink === `.${baseUrl}`);

      // Current Sub Page
      found = this.pages.find(o => !!o.subPages.find(c => c.routerLink.indexOf(`.${url}`) >= 0));
      if (found && found.subPages.length) {
        this.currentSubPage = found.subPages.find(s => s.routerLink.indexOf(`.${url}`) >= 0);
        this.currentSubPageIndex = found.subPages.findIndex(s => s.routerLink.indexOf(`.${url}`) >= 0);
      }

      this.markStepsAsComplete();
    }
  }

  /**
   * Watches for window resizing and captures the screen size
   * https://stackoverflow.com/questions/45350716/detect-window-size-using-angular-4
   * @param event the resize event
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.showLastNavItem();
    this.largeScreen = this.innerWidthService.largeScreen;
  }

  /** Gets the current route data */
  public getRouteData() {

    this.blob = [];

    // Find the first child under the EDE subsection
    if (this.route.firstChild && this.route.firstChild) {
      const root = this.route.firstChild.snapshot;
      const rootPath = root.routeConfig.path;

      // Set the current root page
      this.currentRootPage = this.pages.find(p => p.routerLink === `./${rootPath}`);
      this.currentRootPageIndex = this.pages.findIndex(p => p.routerLink === `./${rootPath}`);

      // Event Emitters
      this.currentStep.emit(this.currentRootPage);
      this.blob.push(this.currentRootPage);
      this.currentIndex.emit(this.blob);

      // Set the current sub page
      if (this.currentRootPage && this.currentRootPage.subPages.length) {
        const sub = root.firstChild;
        const subPath = sub.routeConfig.path;
        const subUrl = `./${rootPath}/${subPath}`;
        this.currentSubPage = this.currentRootPage.subPages.find(s => s.routerLink.indexOf(subUrl) >= 0);
        this.currentSubPageIndex = this.currentRootPage.subPages.findIndex(s => s.routerLink.indexOf(subUrl) >= 0);

        // Event Emitters
        this.currentSubStep.emit(this.currentSubPage);
        this.blob.push(this.currentSubPage);
        const stepsIndexes = {currentStep: this.currentRootPageIndex, currentSubStep: this.currentSubPageIndex};
        this.currentIndex.emit(stepsIndexes);
        this.blob.push(stepsIndexes);

      } else {
        // Event Emitters
        const stepsIndexes = {currentStep: this.currentRootPageIndex};
        this.currentIndex.emit(stepsIndexes);
        this.blob.push(stepsIndexes);
      }
      // Event Emitters
      this.stepData.emit(this.blob);

      // Mark Pages as Completed
      if (this.markStepsCompleted) {
        this.markStepsAsComplete();
      }
    }
  }

  /** Mark All Pages & Subpages Prior To Current Index as Completed */
  public markStepsAsComplete() {
    this.pages.forEach( (element: RootPage, index) => {
      if (index < this.currentRootPageIndex) {
        element.isPassed = true;
        if (element.subPages.length) {
          element.subPages.forEach( (subElement: Page) => {
            subElement.isPassed = true;
          });
        }
      } else {
        element.isPassed = false;
        if (element.subPages.length) {
          element.subPages.forEach( (subElement: Page) => {
            subElement.isPassed = false;
          });
        }
      }
      if ((index === this.currentRootPageIndex) && element.subPages.length && (this.currentSubPageIndex < element.subPages.length)) {
        element.subPages.forEach( (subElement: Page, subIndex) => {
          if (subIndex < this.currentSubPageIndex) {
            subElement.isPassed = true;
          } else {
            subElement.isPassed = false;
          }
        });
      }
    });
  }

  /**
   * Shows the root node
   * @param root The root
   */
  public showRoot(root: RootPage): void {
    if (this.largeScreen && !this.vertical) {
      root.tempDisplay = true;
    }
  }

  /**
   * Toggles the progress menu
   */
  public toggleMenu(): void {
    if (!this.largeScreen || this.vertical) {
      this.displayMenu = !this.displayMenu;
    }
  }

  /**
   * Hides the root node
   * @param root The root
   * @param override True to force hide the root if it has sub-pages
   */
  public hideRoot(root: RootPage, override?: boolean): void {
    // Hide the root if override parameter is true, or if root does not have sub-pages
    if (
      this.largeScreen && !this.vertical &&
      (override || !root.subPages || !root.subPages.length)
    ) {
      root.tempDisplay = false;
    }
  }

  /**
   * Hides the root node from the sub-page
   * @param root The root
   * @param index The sub-page index
   */
  public hideSub(root: RootPage, index: number): void {
    if (index >= root.subPages.length - 1) {
      root.tempDisplay = false;
    }
  }

  /**
   * Sets the screen sizes for responsiveness formerly setScreenSizes
   */
  private showLastNavItem(): void {
    this.innerWidthService.extraLargeScreen
      ? (this.showLastNav = true)
      : (this.showLastNav = false);
  }

}
