import { Component, OnInit, AfterViewInit, Input } from '@angular/core';

import 'gsap';

declare var TimelineMax: any;

/** The Card Grid Component */
@Component({
  selector: 'sws-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.css']
})
export class CardGridComponent implements OnInit, AfterViewInit {
  /** The Data Input */
  @Input() public data;

  /** The Configruation Input */
  @Input() public cardSize;

  public blob = [];

  public cardSizeStyle = 'sm';

  constructor() {}

  /** On Init */
  ngOnInit() {
    if (this.data) {
      this.blob = this.data;
    }

    if (this.cardSize) {
      this.cardSizeStyle = this.cardSize;
    }
  }

  /** After View Initializes */
  ngAfterViewInit() {
    /** Greensock Card Stagger Effect */
    const tl = new TimelineMax({ delay: 0.3 });

    tl.staggerFromTo(
      '.sws-fade-in-stagger',
      0.5,
      { opacity: 0 },
      { opacity: 1 },
      0.175
    );

    /** 2nd Pass - Experimental Greensock
     * // const cols = 10;
     * // const rows = 10;
     * // if count is greater than 4 then do the diagonal ????
     * // count / # per row = column.
     * // for (let r = 0; r < rows; r++) {
     * //   for (let c = 0; c < cols; c++) {
     * //     // var box = $("<div />", {class:"box green", text:c+r}).appendTo(grid)
     * //     // TweenLite.set(box, {x:c * 51, y:r * 51})
     * //     // generate an offset based on column and row (try (r * c) too)
     * //     tl.from('box', 0.5, { opacity: 0, scale: 0 }, (r + c) * 0.05);
     * //   }
     * // }
    */
  }

  /** 2nd Pass - Experimental Greensock
   *  (mouseenter)="cardFlip()" (mouseleave)="cardFlip()"
   * // public cardFlip() {
   * //   const tl = new TimelineMax();
   * //   // CARD FLIP
   * //   tl.to('.specialbox', 1, { rotationY: '+=180' });
   * // }
  */
}
