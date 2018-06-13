import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepperComponent } from './multi-stepper.component';

import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';


describe('MultiStepperComponent', () => {
  let component: MultiStepperComponent;
  let fixture: ComponentFixture<MultiStepperComponent>;

  /**
   * The mock router
   */
  let routerStub: { events: Observable<any>, url: string };

  /**
   * The mock activated routed
   */
  let activatedRouteStub: {};

  beforeEach(async(() => {
    routerStub = { events: of(''), url: './finance/income' };
    activatedRouteStub = {};

    TestBed.configureTestingModule({
      declarations: [ MultiStepperComponent ],
      imports: [ RouterTestingModule],
      providers: [{ provide: Router, useValue: routerStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be url', () => {
    const routerUrl = routerStub.url ? routerStub.url : '';
    expect(routerUrl).toBe('./finance/income');
  });

  it('should clear query parameters', () => {
    const routerUrl = './finance/income?id=12345&theme=green&test=true';
    const url = (routerUrl && (routerUrl.match(/[?]/g) || []).length >= 1) ? routerUrl.substring(0, routerUrl.indexOf('?')) : routerUrl;
    expect(url).toBe('./finance/income');
  });

  it('should parse root url', () => {
    const routerUrl = './finance/income?id=12345&theme=green&test=true';
    const url = (routerUrl && (routerUrl.match(/[?]/g) || []).length >= 1) ? routerUrl.substring(0, routerUrl.indexOf('?')) : routerUrl;
    const baseUrl = (url && (url.match(/[/]/g) || []).length >= 2) ? url.substring(0, url.lastIndexOf('/')) : url;
    expect(baseUrl).toBe('./finance');
  });
});
