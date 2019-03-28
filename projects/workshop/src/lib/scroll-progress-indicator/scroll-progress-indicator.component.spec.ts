import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollProgressIndicatorComponent } from './scroll-progress-indicator.component';

describe('ScrollProgressIndicatorComponent', () => {
  let component: ScrollProgressIndicatorComponent;
  let fixture: ComponentFixture<ScrollProgressIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollProgressIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollProgressIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
