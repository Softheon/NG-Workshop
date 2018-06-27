import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InnerWidthService {
  /** Gets the page size */
  public innerWidth: any;

  /** Mobile Screen Responsiveness Breakpoint */
  public mobileScreen = false;

  /** Mobile Screen Responsiveness Breakpoint */
  public tabletScreen = false;

  /** Large Screen Responsiveness Breakpoint */
  public largeScreen = false;

  /** Extra Large Screen Responsiveness Breakpoint */
  public extraLargeScreen = false;

  /** Watches for window resizing and captures the screen size */
  constructor() {
    window.addEventListener('resize', () => {
      this.setScreenSizes();
    });
   }

  /**
   * Sets the screen sizes for responsiveness
   */
  public setScreenSizes(): void {
    this.innerWidth = window.innerWidth;

    this.innerWidth < 768
      ? (this.mobileScreen = true)
      : (this.mobileScreen = false);

    this.innerWidth < 992
      ? (this.tabletScreen = true)
      : (this.tabletScreen = false);

    this.innerWidth > 1100
      ? (this.largeScreen = true)
      : (this.largeScreen = false);

    this.innerWidth > 1300
      ? (this.extraLargeScreen = true)
      : (this.extraLargeScreen = false);
  }

}
