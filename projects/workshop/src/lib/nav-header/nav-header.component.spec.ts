import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeaderComponent } from './nav-header.component';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

describe('NavHeaderComponent', () => {
  let component: NavHeaderComponent;
  let fixture: ComponentFixture<NavHeaderComponent>;

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
      imports: [ RouterTestingModule, FormsModule],
      declarations: [ NavHeaderComponent ],
      providers: [{ provide: Router, useValue: routerStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
