import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'softheon-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  public customScrollEvent: Event;

  constructor() { }

  ngOnInit() {
  }

  public watchScroll(event: any) {
    this.customScrollEvent = event;
  }
}
