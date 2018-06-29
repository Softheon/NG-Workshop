import { Component, OnInit, Input, HostListener } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { Card } from 'workshop';

import { INavigation, NavConfig } from 'workshop';
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

  public navConfig: NavConfig = new NavConfig();

  public navigation: INavigation = {
    userName: 'Jay Gatsby',
    userEmail: 'jay@thegreatgatsby.com',
    logoImageUrl: 'http://tiny.cc/i5e4uy',
    quickLinks: [
      {
        externalLinkUrl: 'https://www.softheon.com/Site/home',
        linkText: 'Contact',
      },
      {
        linkUrl: './blog',
        linkText: 'Blog'
      },
      {
        linkUrl: './page1',
        linkText: 'About Us',

      },
      {
        linkUrl: './page2',
        linkText: 'Careers'
      },
      {
        linkUrl: './page3',
        linkText: 'Learn More'
      },
      {
        linkUrl: './page4',
        linkText: 'Our Solutions'
      },
      {
        linkUrl: './page5',
        linkText: 'Media'
      },
      {
        linkUrl: './page6',
        linkText: 'News'
      },
    ],
    // userName: 'Jay Gatsby',
    // userEmail: 'jay@thegreatgatsby.com',
    // userMenuLinks: [
    //   {
    //     externalLinkUrl: 'https://www.youtube.com/',
    //     linkText: 'Settings',
    //     fontAwesomeIcon: 'fas fa-anchor'
    //   },
    //   {
    //     linkUrl: './contact',
    //     linkText: 'Languages',
    //     fontAwesomeIcon: 'fas fa-chess'
    //   },
    //   {
    //     linkUrl: './about/ourstory',
    //     linkText: 'Logout'
    //   }
    // ],
    // appHeadingText: 'Additional Apps',
    // headingText: 'External Links',
    // menuLinks: [
    //   {
    //     externalLinkUrl: 'https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html',
    //     linkText: 'Left Menu Link A',
    //   },
    //   {
    //     linkUrl: './app2',
    //     linkText: 'Left Menu Link B',

    //   },
    //   {
    //     linkUrl: './contact',
    //     linkText: 'Left Menu Link C'
    //   }
    // ],
    // applicationLinks: [
    //   {
    //     linkUrl: './home',
    //     linkText: 'Clarity',
    //     fontAwesomeIcon: 'fas fa-chess'
    //   },
    //   {
    //     linkUrl: './contact',
    //     linkText: 'Equity',
    //     fontAwesomeIcon: 'fas fa-chess'
    //   },
    //   {
    //     linkUrl: './about/ourstory',
    //     linkText: 'Remedy',
    //     fontAwesomeIcon: 'fas fa-chess'
    //   }
    // ],
  };

  /**
   * Example Navigation Data
   */
  // public navigation: INavigation = {
  //   // logoText: 'Hello World! This Is Sparta',
  //   // logoImageUrl: 'https://www.softheon.com/HTMLCache/Resources/Logo-navbar-01.png',
  //   // logoImageUrl: 'https://softheonworkshopstorage.blob.core.windows.net/workshopcontainer/workshop-logo-anvil.svg',
  //   userName: 'Jay Gatsby',
  //   userEmail: 'jay@thegreatgatsby.com',
  //   userMenuLinks: [
  //     {
  //       linkUrl: './home',
  //       linkText: 'Settings',
  //       fontAwesomeIcon: 'fas fa-anchor'
  //     },
  //     {
  //       linkUrl: './contact',
  //       linkText: 'Languages',
  //       fontAwesomeIcon: 'fas fa-chess'
  //     },
  //     {
  //       linkUrl: './about/ourstory',
  //       linkText: 'Logout'
  //     }
  //   ],
  //   quickLinks: [
  //     {
  //       linkUrl: './home',
  //       linkText: 'Quick Link A',
  //       fontAwesomeIcon: 'fas fa-chess'
  //     },
  //     {
  //       linkUrl: './contact',
  //       linkText: 'Quick Link B',
  //       fontAwesomeIcon: 'fas fa-anchor'
  //     },
  //     {
  //       linkUrl: './about/ourstory',
  //       linkText: 'Quick Link C',
  //       fontAwesomeIcon: 'fas fa-coffee'
  //     },
  //     {
  //       linkUrl: './home',
  //       linkText: 'Quick Link D'
  //     },
  //   ],
  //   applicationLinks: [
  //     {
  //       linkUrl: './home',
  //       linkText: 'Clarity',
  //       fontAwesomeIcon: 'fas fa-chess'
  //     },
  //     {
  //       linkUrl: './contact',
  //       linkText: 'Equity',
  //       fontAwesomeIcon: 'fas fa-chess'
  //     },
  //     {
  //       linkUrl: './about/ourstory',
  //       linkText: 'Remedy',
  //       fontAwesomeIcon: 'fas fa-chess'
  //     }
  //   ],
  //   menuLinks: [
  //     {
  //       linkUrl: './home',
  //       linkText: 'Left Menu Link A',
  //       fontAwesomeIcon: 'fas fa-anchor'
  //     },
  //     {
  //       linkUrl: './contact',
  //       linkText: 'Left Menu Link B',

  //     },
  //     {
  //       linkUrl: './about/ourstory',
  //       linkText: 'Left Menu Link C'
  //     }
  //   ],
  //   subHeaderLinks: [
  //     {
  //       linkUrl: './contact',
  //       linkText: 'Left Menu Link B',
  //       fontAwesomeIcon: 'fas fa-anchor'
  //     },
  //     {
  //       linkUrl: './about/ourstory',
  //       linkText: 'Left Menu Link C',
  //       fontAwesomeIcon: 'fas fa-coffee'
  //     },
  //     {
  //       linkUrl: './home',
  //       linkText: 'Quick Link A',
  //       fontAwesomeIcon: 'fas fa-chess'
  //     },
  //     {
  //       linkUrl: './contact',
  //       linkText: 'Quick Link B',
  //       fontAwesomeIcon: 'fas fa-anchor'
  //     },
  //     {
  //       linkUrl: './about/ourstory',
  //       linkText: 'Quick Link C',
  //       fontAwesomeIcon: 'fas fa-coffee'
  //     },
  //     {
  //       linkUrl: './home',
  //       linkText: 'Quick Link D'
  //     },
  //   ]
  // };

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

  ngOnInit() {
    this.navConfig.displayAppMenu = true;
    this.navConfig.displaySearch = true;
    this.navConfig.displayUserMenu = true;
    // this.navConfig.displaySubNavMenu = true;
    // this.navConfig.theme = 'theme';

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
