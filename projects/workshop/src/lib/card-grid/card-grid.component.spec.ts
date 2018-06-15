import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGridComponent } from './card-grid.component';

import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

describe('CardGridComponent', () => {
  let component: CardGridComponent;
  let fixture: ComponentFixture<CardGridComponent>;

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
      declarations: [ CardGridComponent ],
      imports: [ RouterTestingModule],
      providers: [{ provide: Router, useValue: routerStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
