import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { observable, Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { of } from 'rxjs';
describe('AppComponent', () => {
  /**
   * The mock translate service
   */
  let translateServiceStub: {
    use: Observable<any>,
    setDefaultLang(lang: string): void
  };

  beforeEach(async(() => {


    translateServiceStub = {
      use: of(''),
      setDefaultLang() {
        return;
      }
    };

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [{ provide: TranslateService, useValue: translateServiceStub }],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
