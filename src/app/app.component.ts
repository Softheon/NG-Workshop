import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'softheon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /** Temp Nav Data */
  public blob;


  /**
   * Example Card-Grid Data
   */
  public cardSize = 'md';
  public cardContent = [
    {
      title: 'The Great Gatsby',
      subtitle: 'F. Scott Fitzgerald',
      desc: 'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald.',
      // fontIcon: 'fas fa-anchor',
      imgUrl: 'https://i.imgur.com/PBaOIbC.gif',
      linkTitle: 'Learn More',
      link: './home'
    }
  ];

  /**
   * Example Multi-Stepper Data
   */
  // public data;
  public data = [
    { page: 'Welcome', url: './welcome' },
    {
      page: 'About Us',
      url: './about',
      subPages: [
       { page: 'Our Story', url: './about/ourstory' },
       { page: 'Frequently Asked Questions', url: './about/faq' },
       { page: 'Meet the Team', url: './about/team' }
     ]
    },
     {
      page: 'Projects',
      url: './project',
      subPages: [
       { page: 'Project A', url: './project/projecta' },
       { page: 'Project B', url: './project/projectb' },
       { page: 'Project C', url: './project/projectc' }
     ]
    },
    { page: 'Contact Us', url: './contact' }
  ];

   /**
   * Example Config Options
   */
  // public config = {
  //   dir: 'v',
  //   markStepsCompleted: false,
  //   navTxt: 'Check Out This Awesome Nav!'
  // };

  // /**
  //  * Set the Data !
  //  * @param translateService The translation service
  //  */
  // constructor(private translateService: TranslateService) {
  //   translateService.setDefaultLang('en');
  //   translateService.use('en');

  //   this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
  //     return this.data = [
  //       { page: this.translateService.instant('nav.start'), url: './hello' },
  //       {
  //         page: this.translateService.instant('nav.about'),
  //         url: './about',
  //         subPages: [
  //           { page: this.translateService.instant('nav.about'), url: './about/about' },
  //           { page: this.translateService.instant('nav.contact'), url: './about/contact' },
  //           { page: this.translateService.instant('nav.faq'), url: './about/faq' }
  //         ]
  //       },
  //       { page: this.translateService.instant('nav.final'), url: './test' }
  //     ];
  //   });

  // }

  /**
   * Event Handler Example
   * @param event
   */
  public currentStep(event) {
    this.blob = event;
  }
}
