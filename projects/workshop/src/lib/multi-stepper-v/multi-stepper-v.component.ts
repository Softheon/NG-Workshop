import { Component, OnInit, Input } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RouterLinkActive,
  NavigationEnd
} from '@angular/router';
import {
  IStep,
  IMultiStep,
  MultiStepper,
  IMultiStepper,
  IMultiStepper2,
  IMultiStep2
} from './multistepper';
import { filter } from 'rxjs/operators';

import { InnerWidthService } from '../common/inner-width.service';

@Component({
  selector: 'sws-multi-stepper-v',
  templateUrl: './multi-stepper-v.component.html',
  styleUrls: ['./multi-stepper-v.component.css']
})
export class MultiStepperVComponent implements OnInit {
  /** IE 11 Check */
  public isPotatOS: boolean;

  /** The current root page */
  public currentRootPage: IMultiStep2;

  /** The current page */
  public currentSubPage: IStep;

  /** The current root page index */
  public currentRootPageIndex: number;

  /** The current sub page index */
  public currentSubPageIndex: number;

  /** Whether or not to display the menu */
  public showMultiVMenu = false;

  /** The step data blob object */
  private blob = [];

  /** Skipahead */
  public skipAhead = true;

  // public myRootClasses = {
  //   passed: this.currentRootPage.isPassed,
  //   progress: this.currentRootPage.isInProgress,
  //   normal: !(this.currentRootPage).isPassed
  //   // saved: this.isSaved,
  //   // long: this.name.length > 6
  // }

  /** The Data Input */
  @Input() public stepData: IMultiStepper;

  @Input() public stepData2: IMultiStepper2;

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
        this.getRouteData2();
      });
  }

  ngOnInit() {
    // IE 11 Check
    this.isPotatOS =
      !!(window as any).MSInputMethodContext &&
      !!(document as any).documentMode;

    this.getRouteData2();
  }

  /** Get the Route Data */
  public getRouteData2() {
    const routerUrl = this.router.url ? this.router.url : '';
    // truncate query parameters
    const url = (routerUrl && (routerUrl.match(/[?]/g) || []).length >= 1) ? routerUrl.substring(0, routerUrl.indexOf('?')) : routerUrl;
    // extract base url
    const baseUrl = (url && (url.match(/[/]/g) || []).length >= 2) ? url.substring(0, url.lastIndexOf('/')) : url;

    if (this.stepData2) {
      // Current Root Page
      this.currentRootPage = this.stepData2.steps.find(c => c.stepUrl === `.${url}`);
      this.currentRootPageIndex = this.stepData2.steps.findIndex(c => c.stepUrl === `.${url}`);
      console.log(this.currentRootPage, 'current root page:');
    }

    this.updateProgress();
  }

  /** Update the Progress */
  public updateProgress() {
    // iterate through steps and if less than
    if (this.stepData2) {
      this.stepData2.steps.forEach((element: IMultiStep, index) => {
        if (index < this.currentRootPageIndex) {
          element.isPassed = true;
        }
      });
      this.currentRootPage.isCurrent = true;
    }
  }

  /** Mark All Pages & Subpages Prior To Current Index as Completed */
  public markStepsAsComplete() {
    this.stepData.steps.forEach((element: IMultiStep, index) => {
      if (index < this.currentRootPageIndex) {
        element.isPassed = true;
        if (element.subSteps.length) {
          element.subSteps.forEach((subElement: IStep) => {
            subElement.isPassed = true;
          });
        }
      } else {
        element.isPassed = false;
        if (element.subSteps.length) {
          element.subSteps.forEach((subElement: IStep) => {
            subElement.isPassed = false;
          });
        }
      }
      if (
        index === this.currentRootPageIndex &&
        element.subSteps.length &&
        this.currentSubPageIndex < element.subSteps.length
      ) {
        element.subSteps.forEach((subElement: IStep, subIndex) => {
          if (subIndex < this.currentSubPageIndex) {
            subElement.isPassed = true;
          } else {
            subElement.isPassed = false;
          }
        });
      }
      console.log(element);
    });
    console.log(this.stepData.steps, 'current sub pages post completed:');
  }
}
