import { Component, OnInit, HostListener, Output, EventEmitter, Input, SimpleChanges, SimpleChange, OnChanges } from '@angular/core';

/** The Scroll Progress Indicator Component */
@Component({
  selector: 'sws-scroll-progress',
  templateUrl: './scroll-progress-indicator.component.html',
  styleUrls: ['./scroll-progress-indicator.component.css']
})
export class ScrollProgressIndicatorComponent implements OnInit, OnChanges {
  /** The bottom of the page */
  public bottomOfPage: boolean;

  /** The Scroll Progress */
  public scrollProgress: number;

  /** Scrolled completion */
  public scrolled: number;

  /** The custom element's event to update the scroll progress indicator with */
  @Input() customScrollEvent: Event;

  /** Whether or not the scroll progress indicator should watch a custom element */
  @Input() useCustomElement: boolean;

  /** Event Emitter: the scroll progress */
  @Output() scroll: EventEmitter<any> = new EventEmitter();

  /** Event Emitter: whether or not the user is at the top of the page */
  @Output() top: EventEmitter<boolean> = new EventEmitter();

  /** Event Emitter: whether or not the user is at the bottom of the page */
  @Output() bottom: EventEmitter<boolean> = new EventEmitter();

  /** Event Emitter: when the user clicks the button */
  @Output() btnClick: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  /** Scroll event listener */
  @HostListener('window:scroll')
  public onWindowScroll(): void {
    if (!this.useCustomElement) {
      this.watchScroll();
      this.isTopOfPage();
      this.isBottomOfPage();
    }
  }

  /** Sends an event emitter when the button is clicked */
  public clickEventEmitter(): void {
    this.btnClick.emit(true);
  }

  ngOnInit() {}

  /** On Changes event listener if custom scroll event */
  ngOnChanges(changes: SimpleChanges) {
    if (this.useCustomElement && this.customScrollEvent !== undefined) {
      const customScrollEvent: SimpleChange = changes.customScrollEvent;
      this.watchScroll(this.customScrollEvent);
      this.isTopOfPage();
      this.isBottomOfPage(this.customScrollEvent);
    }
  }

  /** The scroll progress logic */
  private watchScroll(customScrollEvent?: Event): void {
    let targetElement: HTMLTextAreaElement;
    let winScroll: number;
    let height: number;
    if (customScrollEvent) {
      targetElement = customScrollEvent.target as HTMLTextAreaElement;
      winScroll = targetElement.scrollTop;
      height = targetElement.scrollHeight - targetElement.clientHeight;
    } else {
      winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    }

    const donutBorder = 359;
    const donutBorderDifference = 151;
    this.scrolled = +((winScroll / height) * 100).toFixed(0);
    const progress = donutBorderDifference * (this.scrolled / 100);
    this.scrollProgress = donutBorder + progress;
    this.scroll.emit(this.scrolled);
  }

  /** Determines whether or not the user is at the bottom of the page */
  private isBottomOfPage(customScrollEvent?: Event): void {
    let targetElement: HTMLTextAreaElement;
    let pos: number;
    let max: number;
    if (customScrollEvent) {
      targetElement = customScrollEvent.target as HTMLTextAreaElement;
      pos = targetElement.scrollTop + targetElement.scrollTop;
      max = targetElement.scrollHeight;
    } else {
      // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
      // https://stackoverflow.com/questions/51540187/detect-bottom-scroll/51550034
      pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
      max = document.documentElement.scrollHeight;
    }
    if (pos >= max - 50) {
      this.bottomOfPage = true;
      this.bottom.emit(true);
    } else {
      this.bottomOfPage = false;
      this.bottom.emit(false);
    }
  }

  /** Determines whether or not the user is at the top of the page */
  private isTopOfPage(): void {
    if (this.scrolled === 0) {
      this.top.emit(true);
    } else {
      this.top.emit(false);
    }
  }
}
