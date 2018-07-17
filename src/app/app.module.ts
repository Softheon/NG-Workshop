import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MultiStepperVModule, MultiStepperModule, CardGridModule, NavHeaderModule, FooterModule } from 'workshop';

import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SublevelComponent } from './about/sublevel/sublevel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HelloComponent } from './welcome/hello/hello.component';

/**
 * Creates the translate HTTP loader
 * This is necessary for AoT loading
 * @param http
 */
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      page: 'contact'
    }
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    data: {
      page: 'welcome'
    }
  },
  {
    path: 'about',
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'ourstory', component: SublevelComponent },
      { path: 'another', component: SublevelComponent },
      { path: 'hello', component: HelloComponent },
    ]
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    SublevelComponent,
    WelcomeComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MultiStepperModule,
    MultiStepperVModule,
    CardGridModule,
    NavHeaderModule,
    FooterModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
