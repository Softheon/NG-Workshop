import { Component, OnInit, HostListener, Output, EventEmitter } from '@angular/core';

/** The Scroll Progress Indicator Component */
@Component({
  selector: 'sws-scroll-progress',
  templateUrl: './scroll-progress-indicator.component.html',
  styleUrls: ['./scroll-progress-indicator.component.css']
})
export class ScrollProgressIndicatorComponent implements OnInit {
  /** The bottom of the page */
  public bottomOfPage: boolean;

  /** The Scroll Progress */
  public scrollProgress: number;

  /** Scrolled completion */
  public scrolled: number;

  /** Event Emitter: the scroll progress */
  @Output() scroll: EventEmitter<any> = new EventEmitter();

  /** Event Emitter: whether or not the user is at the top of the page */
  @Output() top: EventEmitter<boolean> = new EventEmitter();

  /** Event Emitter: whether or not the user is at the bottom of the page */
  @Output() bottom: EventEmitter<boolean> = new EventEmitter();

  /** Event Emitter: when the user clicks the button */
  @Output() btnClick: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  /** Scroll to bottom listener */
  // https://stackoverflow.com/questions/51540187/detect-bottom-scroll/51550034
  @HostListener('window:scroll')
  public onWindowScroll(): void {
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    this.watchScroll();
    this.isTopOfPage();
    this.isBottomOfPage();
  }

  /** Sends an event emitter when the button is clicked */
  public clickEventEmitter(): void {
    this.btnClick.emit(true);
  }

  ngOnInit() {}

  /** The scroll progress logic */
  private watchScroll(): void {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const donutBorder = 359;
    const donutBorderDifference = 151;
    this.scrolled = +((winScroll / height) * 100).toFixed(0);
    const progress = donutBorderDifference * (this.scrolled / 100);
    this.scrollProgress = donutBorder + progress;
    this.scroll.emit(this.scrolled);
  }

  /** Determines whether or not the user is at the bottom of the page */
  private isBottomOfPage(): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;
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
