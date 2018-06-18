import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SublevelComponent } from './sublevel.component';

describe('SublevelComponent', () => {
  let component: SublevelComponent;
  let fixture: ComponentFixture<SublevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SublevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SublevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
