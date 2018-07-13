import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkComponent } from './link.component';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  /**
   * The mock router
   */
  let routerStub: { events: Observable<any>, url: string };

  /**
   * The mock activated routed
   */
  let activatedRouteStub: {};

  beforeEach(async(() => {
    routerStub = { events: of(''), url: './homer' };
    activatedRouteStub = {};
    TestBed.configureTestingModule({
      declarations: [ LinkComponent ],
      imports: [ RouterTestingModule],
      providers: [{ provide: Router, useValue: routerStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
