import { Component, OnInit, Input } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd
} from '@angular/router';
import {
  IStep,
  IMultiStepper
} from './multistepper';
import { filter } from 'rxjs/operators';


/** The Vertical Multistepper Component */
@Component({
  selector: 'sws-multi-stepper-v',
  templateUrl: './multi-stepper-v.component.html',
  styleUrls: ['./multi-stepper-v.component.css']
})
export class MultiStepperVComponent implements OnInit {
  /** IE 11 Check */
  public isPotatOS: boolean;

  /** The current root page */
  public currentRootPage: IStep;

  /** The current page */
  public currentSubPage: IStep;

  /** The current root page index */
  public currentRootPageIndex: number;

  /** The current sub page index */
  public currentSubPageIndex: number;

  /** Whether or not to display the menu */
  public showMultiVMenu = false;

  /** Devmode skip ahead */
  public devMode = false;

  /** The Data Input */
  @Input() public stepData: IMultiStepper;

  /**
   * The Constructor - Subscribes to router events and gets the current page
   * @param router The Angular Router
   * @param route The Activated Route
   */
  constructor(private router: Router, private route: ActivatedRoute) {
    // subscribe to router event
    this.router.events
      // Ignore any events that are not Navigation End
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.getRouteData();
      });
  }

  ngOnInit() {
    // IE 11 Check
    this.isPotatOS =
      !!(window as any).MSInputMethodContext &&
      !!(document as any).documentMode;

    this.getRouteData();

    if (this.stepData && this.stepData.devMode) {
        this.devMode = true;
    }
  }

  /** Get the Route Data */
  public getRouteData(): void {
    const routerUrl = this.router.url ? this.router.url : '';
    // truncate query parameters
    const url = (routerUrl && (routerUrl.match(/[?]/g) || []).length >= 1) ? routerUrl.substring(0, routerUrl.indexOf('?')) : routerUrl;
    // extract base url
    const baseUrl = (url && (url.match(/[/]/g) || []).length >= 2) ? url.substring(0, url.lastIndexOf('/')) : url;

    if (this.stepData) {
      // Current Root Page
      this.currentRootPage = this.stepData.steps.find(c => c.stepUrl === `.${url}`);
      this.currentRootPageIndex = this.stepData.steps.findIndex(c => c.stepUrl === `.${url}`);
    }

    this.updateProgress();
  }

  /** Update the Progress */
  public updateProgress(): void {
    if (this.stepData) {
      this.stepData.steps.forEach((element: IStep, index) => {
        if (index < this.currentRootPageIndex) {
          element.isPassed = true;
        }
      });
      if (this.currentRootPage) {
        this.currentRootPage.isCurrent = true;
      }
    }
  }
}
