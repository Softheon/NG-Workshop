import { Component, OnInit, Input } from '@angular/core';

/**
 * The Side Nav Component
 */
@Component({
  selector: 'sws-sidenav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  /** Whether or not the nav is collapsed (As input, initial state of the nav on desktop) */
  @Input() public isNavCollapsed: boolean;

  /** Whether or not to display the hover tabs when the sidenav is collapsed */
  @Input() public enableHoverTab: boolean;

  /** Whether or not to display the overlay when the navigation is open */
  @Input() public enableOverlay: boolean;

  /** Custom class to add to the sidenav */
  @Input() public sidenavCustomClass: string;

  /** Custom class to add to the sidenav overlay */
  @Input() public overlayCustomClass: string;

  /** Custom text to replace the 'MENU' */
  @Input() public menuText: string;

  /** Custom text to replace the 'MENU' icon */
  @Input() public menuIcon: string;

  /** The text that displays in the tooltip when the nav is hovered in the collapsed state */
  public navHoverText: string;

  /** the tooltip opacity */
  public tooltipOpacity: number;

  /** the offset top for the tooltip */
  public tooltipTop: string;

  // on init
  public ngOnInit(): void {
    // sets the default nav states
    // default is collapsed
    if (this.enableHoverTab === undefined) {
      this.enableHoverTab = true;
    }
    if (this.isNavCollapsed === undefined || window.innerWidth < 1200) {
      this.isNavCollapsed = true;
    }
  }

  /** Toggles the sidenav state */
  public swsToggleSideNav(): void {
    this.isNavCollapsed = !this.isNavCollapsed;
  }

  /**
   * On Focus event, displays the tooltip with the inner text of the hovered/focused element
   * @param event the hover / a11y focus event
   */
  public focusOnEvent(event: Event): void {
    const targetElement = event.target as HTMLTextAreaElement;
    const targetText = targetElement.innerText;
    if (targetText && targetElement.matches('a')) {
      this.navHoverText = targetText;
      this.tooltipOpacity = 1;
      this.tooltipTop = `${targetElement.getBoundingClientRect().top}.px`;
    }
  }

  /**
   * Focus off event, hides the tooltip
   */
  public focusOffEvent(): void {
    if (this.tooltipOpacity === 1) {
      this.tooltipOpacity = 0;
    }
  }
}
