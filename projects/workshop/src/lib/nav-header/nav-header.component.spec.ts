import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './nav-header.component';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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
      declarations: [ HeaderComponent ],
      providers: [{ provide: Router, useValue: routerStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
