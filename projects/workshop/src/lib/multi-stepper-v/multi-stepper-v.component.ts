import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { IStep, IMultiStepper } from './multistepper';
import { filter } from 'rxjs/operators';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

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

  /** Allow skip ahead */
  @Input() public skipAhead = false;

  /** The Enable Toggle Icon Input */
  @Input() public enableToggleIcon = true;

  /** The default style */
  @Input() public defaultStyle = true;

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

  // On init
  ngOnInit() {
    // IE 11 Check
    this.isPotatOS =
      !!(window as any).MSInputMethodContext &&
      !!(document as any).documentMode;

    this.getRouteData();
  }

  /** Get the Route Data */
  public getRouteData(): void {
    const routerUrl = this.router.url ? this.router.url : '';
    // truncate query parameters
    const url =
      routerUrl && (routerUrl.match(/[?]/g) || []).length >= 1
        ? routerUrl.substring(0, routerUrl.indexOf('?'))
        : routerUrl;
    // extract base url
    const baseUrl =
      url && (url.match(/[/]/g) || []).length >= 2
        ? url.substring(0, url.lastIndexOf('/'))
        : url;

    if (this.stepData) {
      // Current Root Page
      this.currentRootPage = this.stepData.steps.find(
        c => c.stepUrl === `.${url}`
      );
      this.currentRootPageIndex = this.stepData.steps.findIndex(
        c => c.stepUrl === `.${url}`
      );
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
      // set up current root page
      if (this.currentRootPage) {
        this.currentRootPage.isCurrent = true;

        // set the step group index
        this.stepData.steps.forEach(e => {
          // isCollapsed
          if (
            e.isSubStep &&
            e.stepGroupIndex === this.currentRootPage.stepGroupIndex
          ) {
            e.isCollapsed = false;
          } else if (
            !e.isSubStep &&
            e.stepGroupIndex === this.currentRootPage.stepGroupIndex
          ) {
            e.isCollapsed = false;
          } else {
            e.isCollapsed = true;
          }
        });
      }
    }
  }

  /** Toggle the collapsible steps */
  public toggleCollapsible(step: IStep): void {
    // collapses the steps
    if (step.isCollapsed === false || step.isCollapsed === undefined) {
      this.stepData.steps.forEach((steps: IStep) => {
        if (steps.isSubStep && steps.stepGroupIndex === step.stepGroupIndex) {
          steps.isCollapsed = true;
        } else {
          steps.isCollapsed = false;
        }
      });
      step.isCollapsed = true;
    } else {
      // un-collapse the steps
      this.stepData.steps.forEach((steps: IStep) => {
        if (steps.isSubStep && steps.stepGroupIndex === step.stepGroupIndex) {
          steps.isCollapsed = false;
        } else {
          steps.isCollapsed = true;
        }
      });
      step.isCollapsed = false;
    }
  }
}
