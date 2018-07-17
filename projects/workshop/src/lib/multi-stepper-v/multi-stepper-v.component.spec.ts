import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStepperVComponent } from './multi-stepper-v.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MultiStepperVComponent', () => {
  let component: MultiStepperVComponent;
  let fixture: ComponentFixture<MultiStepperVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiStepperVComponent ],
      imports: [RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiStepperVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
