import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { IHeader, HeaderConfig, IFooter, FooterConfig, Card, IMultiStepper, IBreadcrumb } from 'workshop';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'softheon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('toggle2', [
      state('true', style({ opacity: 1, color: 'red', transform: 'translateX(0)' })),
      state('void', style({ opacity: 0, color: 'blue', transform: 'translateX(-300px)' })),
      transition(':enter', animate('500ms ease-in-out')),
      transition(':leave', animate('500ms ease-in-out'))
    ])
  ],
})
export class AppComponent implements OnInit {
  /** Temp Data */
  public blob;
  public searchItem;

  public breadcrumbData: IBreadcrumb = {
    breadcrumb: [
      {
        linkText: 'Softheon',
        linkUrl: './home'
      },
      {
        linkText: 'Careers',
        linkUrl: './home/careers'
      },
      {
        linkText: 'Internships',
        linkUrl: './home/careers/internship'
      },
      {
        linkText: 'Software Engineering',
        linkUrl: './home/careers/internship/engineers'
      }
    ]
  };

  public stepData: IMultiStepper = {
    // menuText: 'subway',
    steps: [
      {
        stepTitle: 'test1 welcome',
        stepUrl: './welcome',
        stepIndex: 1,
        isSubStep: false
      },
      {
        stepTitle: 'test2 hello',
        stepUrl: './about/hello',
        stepIndex: 2,
        isSubStep: true
      },
      {
        stepTitle: 'test3 contact',
        stepUrl: './contact',
        stepIndex: 3,
        isSubStep: true
      },
      {
        stepTitle: 'test4 ourstory',
        stepUrl: './about/ourstory',
        stepIndex: 4,
        isSubStep: false
      },
      // {
      //   stepTitle: 'test4 ourstory',
      //   stepUrl: './about/ourstory',
      //   stepIndex: 5,
      //   isSubStep: false
      // }
    ]
  };

  /**
   * Example Footer Data
   */
  public footerConfig: FooterConfig = new FooterConfig();

  public footer: IFooter = {
    contactPhoneNumber: '5555555555',
    // releaseVersionNo: '1.2.0.beta',
    // copyrightText: '2018 Workshop, All Rights Reserved',
    // aboutTitle: 'About Our Company',
    footerLogoUrl: 'https://softheonworkshopstorage.blob.core.windows.net/workshopcontainer/workshop-logo.png',
    // tslint:disable-next-line:max-line-length
    aboutText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    contactEmail: 'info@someonesemail.com',
    contactAddress: '1 Street, Awesome City, State, Zip',
    // contactUs: {
    //   externalLinkUrl: 'https://github.com/Softheon/NG-Workshop',
    //   linkText: 'Contact',
    //   fontAwesomeIcon: 'fas fa-anchor'
    // },
    // terms: {
    //   externalLinkUrl: 'https://github.com/Softheon/NG-Workshop',
    //   linkText: 'Terms'
    // },
    // privacy: {
    //   linkUrl: './about/ourstory',
    //   linkText: 'Privacy'
    // },
    // socialMediaTitle: 'Follow us:',
    socialLinkedInUrl: 'https://www.linkedin.com/company/softheon',
    socialFacebookUrl: 'https://facebook.com/',
    socialTwitterUrl: 'https://twitter.com/',
    socialYoutubeUrl: 'https://www.youtube.com/',
    socialInstagramUrl: 'https://www.instagram.com',
    socialGooglePlusUrl: 'https://plus.google.com/discover',
    socialPinterestUrl: 'https://www.pinterest.com/',
    socialGithubUrl: 'https://github.com/Softheon/NG-Workshop',
    socialNPMUrl: 'https://www.npmjs.com/package/@softheon/ng-workshop',
    linkGroup1Title: 'Section 1',
    linkGroup1: [{
      externalLinkUrl: 'https://angular.io/',
      linkText: 'Lorem',
    },
    {
      linkUrl: './home',
      linkText: 'Ipsum',
    }],
    linkGroup2Title: 'Section 2',
    linkGroup2: [{
      externalLinkUrl: 'https://angular.io/',
      linkText: 'Lorem',
    },
    {
      linkUrl: './home',
      linkText: 'Ipsum',
    }],
  };

  public headerConfig: HeaderConfig = new HeaderConfig();

  /**
   * Example Navigation Data
   */
  public navigation: IHeader = {
    logoText: 'NG-Workshop',
    logoImageUrl: 'https://softheonworkshopstorage.blob.core.windows.net/workshopcontainer/anvil-white.png',
    // logoImageUrl: 'https://softheonworkshopstorage.blob.core.windows.net/workshopcontainer/workshop-logo-anvil-white.svg',
    // logoImageUrl: 'https://developer.softheon.io/workshop/img/logo.png',
    userName: 'Jay Gatsby',
    userEmail: 'jay@thegreatgatsby.com',
    userMenuLinks: [
      {
        linkUrl: './home',
        linkText: 'Settings',
        fontAwesomeIcon: 'fas fa-anchor'
      },
      {
        emitEvent: true,
        linkText: 'Change Language',
        fontAwesomeIcon: 'fas fa-chess'
      },
      {
        linkUrl: './contact',
        linkText: 'Contact',
        fontAwesomeIcon: 'fas fa-chess'
      },
      {
        externalLinkUrl: 'https://angular.io/',
        linkText: 'Logout'
      }
    ],
    quickLinks: [
      {
        linkUrl: './welcome',
        linkText: 'Quick Link A',
        fontAwesomeIcon: 'fas fa-chess'
      },
      {
        linkUrl: './contact',
        linkText: 'Quick Link B',
        fontAwesomeIcon: 'fas fa-anchor'
      },
      {
        linkUrl: './about/ourstory',
        linkText: 'Quick Link C',
        fontAwesomeIcon: 'fas fa-coffee'
      },
      {
        linkUrl: './about/hello',
        linkText: 'Quick Link D'
      },
    ],
    applicationLinks: [
      {
        linkUrl: './home',
        linkText: 'Clarity',
        fontAwesomeIcon: 'fas fa-chess'
      },
      {
        externalLinkUrl: 'https://github.com/Softheon/NG-Workshop',
        linkText: 'Equity',
        fontAwesomeIcon: 'fas fa-chess'
      },
      {
        linkUrl: './about/ourstory',
        linkText: 'Remedy',
        fontAwesomeIcon: 'fas fa-chess'
      }
    ],
    menuLinks: [
      {
        linkUrl: './home',
        linkText: 'Left Menu Link A',
        fontAwesomeIcon: 'fas fa-anchor'
      },
      {
        linkUrl: './contact',
        linkText: 'Left Menu Link B',

      },
      {
        linkUrl: './about/ourstory',
        linkText: 'Left Menu Link C'
      },
    ],
    subHeaderLinks: [
      {
        linkUrl: './contact',
        linkText: 'Left Menu Link B',
        fontAwesomeIcon: 'fas fa-anchor'
      },
      {
        linkUrl: './about/ourstory',
        linkText: 'Left Menu Link C',
        fontAwesomeIcon: 'fas fa-coffee'
      },
      {
        linkUrl: './home',
        linkText: 'Quick Link A',
        fontAwesomeIcon: 'fas fa-chess'
      },
      {
        linkUrl: './contact',
        linkText: 'Quick Link B',
        fontAwesomeIcon: 'fas fa-anchor'
      },
      {
        linkUrl: './about/ourstory',
        linkText: 'Quick Link C',
        fontAwesomeIcon: 'fas fa-coffee'
      },
      {
        linkUrl: './home',
        linkText: 'Quick Link D'
      },
    ]
  };

  /**
   * Example Card-Grid Data
   */
  public cardSize = 'md';

  public testCard: Card = {
    title: 'The Great Gatsby',
    subtitle: 'F. Scott Fitzgerald',
    desc:
      'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald.',
    imgUrl: 'https://i.imgur.com/PBaOIbC.gif',
    linkTitle: 'Learn More',
    link: './home'
  };

  public cardContent: Card[] = [
    {
      title: 'The Great Gatsby',
      subtitle: 'F. Scott Fitzgerald',
      desc:
        'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald.',
      // fontIcon: 'fas fa-anchor',
      imgUrl: 'https://i.imgur.com/PBaOIbC.gif',
      linkTitle: 'Learn More',
      link: './home'
    },
  ];

  // best practice:
  public cardArray: Card[] = new Array<Card>();

  /**
   * Example Multi-Stepper Data
   */
  // public data;
  public data = [
    { page: 'Welcome', url: './welcome' },
    { page: 'Contact Us', url: './contact' },
    {
      page: 'About Us',
      url: './about',
      subPages: [
        { page: 'Our Story', url: './about/ourstory' },
        { page: 'Frequently Asked Questions', url: './about/hello' },
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
    { page: 'Finito', url: './wat' },
  ];

  /**
   * Example Config Options
   */
  public config = {
    skipAhead: false,
    // dir: 'v',
    // markStepsCompleted: false,
    // navTxt: 'Check Out This Awesome Nav!'
  };

  // /**
  //  * Set the Data !
  //  * @param translateService The translation service
  //  */
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('en');
    translateService.use('en');

    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log('thing');
      // return this.data = [
      //   { page: this.translateService.instant('nav.start'), url: './hello' },
      //   {
      //     page: this.translateService.instant('nav.about'),
      //     url: './about',
      //     subPages: [
      //       { page: this.translateService.instant('nav.about'), url: './about/about' },
      //       { page: this.translateService.instant('nav.contact'), url: './about/contact' },
      //       { page: this.translateService.instant('nav.faq'), url: './about/faq' }
      //     ]
      //   },
      //   { page: this.translateService.instant('nav.final'), url: './test' }
      // ];
    });

  }

  // @Input() show = true;
  // @HostListener('document:click')
  // onClick() {
  //   this.show = !this.show;
  // }

  // animationStarted($event) {
  //   console.log('Start');
  // }

  // animationDone($event) {

  //   // event.target.classList.add('class3'); // To ADD
  //   // event.target.classList.remove('class1'); // To Remove
  //   // event.target.classList.contains('class2'); // To check
  //   // event.target.classList.toggle('class4'); // To toggle

  //   // const element = event.currentTarget as HTMLInputElement;
  //   // console.log('End');
  //   // if (this.show) {
  //   //   console.log('Nav is visible!!!');
  //   //   // element.classList.add('class3');
  //   // }
  //   // else if (element.classList.contains('class2')) {
  //   //     element.classList.remove('class3');
  //   // }
  // }

  public function1(): void {
    console.log('woohoo!');
  }

  public switchLanguage() {
    this.translateService.use('es');
  }

  ngOnInit() {

    this.footerConfig.theme = 'dark';
    this.footerConfig.size = 'sm';

    // this.headerConfig.theme = 'light';
    this.headerConfig.displayAppMenu = true;
    this.headerConfig.displaySearch = true;
    this.headerConfig.displayUserMenu = true;
    this.headerConfig.smallLogo = true;
    // this.headerConfig.displaySubNavMenu = true;
    // this.headerConfig.theme = 'theme';

    this.cardArray = [
      {
        title: 'The Great Gatsby',
        subtitle: 'F. Scott Fitzgerald',
        desc:
          'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald.',
        // fontIcon: 'fas fa-anchor',
        imgUrl: 'https://i.imgur.com/PBaOIbC.gif',
        linkTitle: 'Learn More',
        link: './home'
      },
      {
        title: 'The Great Gatsby',
        subtitle: 'F. Scott Fitzgerald',
        desc:
          'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald.',
        // fontIcon: 'fas fa-anchor',
        imgUrl: 'https://i.imgur.com/PBaOIbC.gif',
        linkTitle: 'Learn More',
        link: './home'
      }
    ];
  }

  /**
   * Event Handler Example
   * @param event
   */
  public currentStep(event) {
    this.blob = event;
  }

  /**
   * Event Handler Example
   * @param event
   */
  public searchSomething(event) {
    this.searchItem = event;
  }
}
