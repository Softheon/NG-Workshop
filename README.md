# NG-Workshop

<p style="text-align: center;">
<img width="200" alt="NG-Workshop" src="https://softheonworkshop.azureedge.net/workshopcontainer/workshop-logo-anvil.svg">
</p>

## NG-Workshop is a suite of modern Angular Components built on the Softheon Workshop Design System.


## **Quick Links**
- [Getting Started](#getting-started)
- [Components](#components)
-    * [Scroll-Progress](#scroll-progress)
     * [Vertical-Multi-Stepper](#vertical-multi-stepper)
     * [Card-Grid](#card-grid)
     * [Header](#header)
     * [Breadcrumbs](#breadcrumbs)
     * [Footer](#footer)
     * [Multi-Stepper](#multi-stepper)
- [NPM Repository](https://www.npmjs.com/package/@softheon/ng-workshop)

## **Getting Started**

### **Step 1: Install NG-Workshop**

#### Install the package.

```shell
npm install --save @softheon/ng-workshop@latest
```

#### Include a link to Softheon Workshop UI in your index.html

```html
<link rel="stylesheet" href="https://softheonworkshop.azureedge.net/beta-2/workshop.blue.min.css">
```

#### Include a link to [Font Awesome 5 SVG with JS Library](https://fontawesome.com/get-started/svg-with-js) in your index.html

Example:

```html
<script defer src="https://use.fontawesome.com/releases/v5.2.0/js/all.js" integrity="sha384-4oV5EgaV02iISL2ban6c/RmotsABqE4yZxZLcYMAdG7FAPsyHYAPpywE9PJo+Khy" crossorigin="anonymous"></script>
```

<!-- #### Include the [GSAP](https://greensock.com/gsap) package in your package.json under 'dependencies'

Example:

```json
  ...
  "dependencies": {
    "gsap": "^2.0.1",
  },
  ...
``` -->

#### Add your components

```TypeScript
import { MultiStepperModule } from '@softheon/ng-workshop';
@NgModule({
    ...
    imports: [MultiStepperModule]
    ...
})
export class MyAppModule { }
```


## **Components**

### **Scroll Progress**

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/Workshop2_ScrollProgress.png "NG Workshop Example")


#### `<sws-scroll-progress>` is a component used to render a scroll progress indicator donut visualization


#### API reference for NG-Workshop Scroll Progress Component

Module.ts:

```TypeScript
import { ScrollProgressModule } from '@softheon/ng-workshop';
```

#### **Add component to your html**

```html
  <div style="position: fixed; bottom: 0; padding: 20px;">
      <sws-scroll-progress (scroll)="log($event)" (top)="log($event)" (bottom)="log($event)" (click)="log($event)"></sws-scroll-progress>
  </div>
```

#### **Example Event Emitter Method**

```TypeScript
  public log(event) {
    console.log('e: ', event);
  }
```


#### **Scroll Progress Event Emitters (emits on Scroll)**

| Key    | Type       | Description                                                                               |
|--------|------------|-------------------------------------------------------------------------------------------|
| scroll | number     | the percentage of the scroll progress (ie. top of the page = 0, bottom of the page = 100) |
| top    | boolean    | Emits true when the scroll is at the top of the page                                      |
| bottom | boolean    | Emits true when the scroll is at the bottom of the page                                   |
| click  | MouseEvent | Emitter when the button is clicked                                                        |

#### **The Scroll Progress Indicator can be themed in the styles.css file as such:**

```css
:root {
  --sws-progress-arrow-color: #4b4e56;
  --sws-progress-indicator-color: #4b4e56; /* the progress ring color */
  --sws-progress-glow-color-start: 0 0 0 0 rgba(175, 175, 175, 0.9);
  --sws-progress-glow-color-end: 0 0 0 0 rgba(175, 175, 175, 0);
  --sws-progress-init-color: rgba(75, 78, 86, .18);  /* the progress ring's init color */
  --sws-progress-hover-color: rgba(75, 78, 86, .5);
  --sws-progress-focus-color: rgba(75, 78, 86, 1);
}
```

Note which variables are using rgba vs hex colors, and their alpha value.

### **Vertical-Multi-Stepper**

Version 1 :

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/Workshop2_Multistepper2.png "NG Workshop Example")

Version 2 :

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/Workshop2_Multistepper.jpg "NG Workshop Example")

#### `<sws-multi-stepper-v>` is a component used to render a progressive vertical multistepper.


#### API reference for NG-Workshop Vertical-Multi-Stepper Component

Module.ts:

```TypeScript
import { MultiStepperVModule } from '@softheon/ng-workshop';
```

Component.ts:

```TypeScript
import { IMultiStepper } from '@softheon/ng-workshop';

  public stepData: IMultiStepper = {
    menuText: 'MENU',
    steps: [
      {
        stepTitle: 'Checkout',
        stepUrl: './checkout',
        isSubStep: false,
        isCollapsible: true,
        stepGroupIndex: 0,
      },
      {
        stepTitle: 'Shipping',
        stepUrl: './checkout/shipping',
        isSubStep: true,
        stepGroupIndex: 0,
      },
      {
        stepTitle: 'Billing',
        stepUrl: './checkout/billing',
        isSubStep: true,
        stepGroupIndex: 0,
      },
      {
        stepTitle: 'Review',
        stepUrl: './checkout/review',
        isSubStep: true,
        stepGroupIndex: 0,
      },
      {
        stepTitle: 'Finish',
        stepUrl: './finished',
        isSubStep: false
      },
      {
        stepTitle: 'Thank you',
        stepExternalUrl: 'https://github.com/Softheon/NG-Workshop',
        isSubStep: false
      }
    ]
  };
```

#### **Add component to your html**

```html
<sws-multi-stepper-v [stepData]="stepData"></sws-multi-stepper-v>
```

Example 2-column HTML with flexbox positioning:

```html
<div flex-container-responsive>
   <div m-t-15>
     <sws-multi-stepper-v [stepData]="stepData"></sws-multi-stepper-v>
   </div>
   <div full-width m-a-10>
      <!-- Content Goes here -->
    </div>
</div>
```

#### **Vertical Multistepper Input Configurations**

| Key              | Type          | Required | Default Value | Description                                         |
|------------------|---------------|----------|---------------|-----------------------------------------------------|
| stepData         | IMultiStepper | yes      | n/a           | The order index                                     |
| defaultStyle     | boolean       | no       | true          | The default UI style of the multistepper            |
| skipAhead        | boolean       | no       | false         | Enable or disables skip-ahead                       |
| enableToggleIcon | boolean       | no       | true          | Whether or not to display the title and toggle icon |

#### **Vertical Multistepper 'IStep' Properties**

| Key             | Type    | Required                   | Example                                   | Description                                      |
|-----------------|---------|----------------------------|-------------------------------------------|--------------------------------------------------|
| stepUrl         | string  | yes, if no stepExternalUrl | './start'                                 | The router link url                              |
| stepExternalUrl | string  | yes, if no stepUrl         | 'https://github.com/Softheon/NG-Workshop' | The router link url                              |
| stepTitle       | string  | yes                        | 'Start'                                   | The title                                        |
| isSubStep       | boolean | yes                        | true                                      | If the step is displayed as a substep            |
| stepGroupIndex  | number  | no                         | '1'                                       | The order index                                  |
| isCollapsible   | boolean | no, default false          | true                                      | If the step should display the collapsible arrow |
| isPassed        | boolean | n/a                        | n/a                                       | If the step is passed                            |
| isCurrent       | boolean | n/a                        | n/a                                       | If the step is current                           |
| isCollapsed     | boolean | n/a                        | n/a                                       | If the steps group is collapsed                  |

#### **Vertical Multistepper 'IMultiStepper' Properties**

| Key      | Type    | Required | Example                                  | Description           |
|----------|---------|----------|------------------------------------------|-----------------------|
| menuText | string  | optional | 'Epic Subtitle', default value is 'MENU' | The multistepper text |
| steps    | IStep[] | required | steps: [{...}]                           | The array of ISteps   |

### **Card-Grid**
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Example-Card-Grid-Header.png "NG Workshop Example")

#### `<sws-card-grid>` is a component used to render a grid of cards styled content. Links are keyboard tab-able.

 <!-- and on initialization the grid displays a [GSAP](https://greensock.com/) cascading loading animation.  -->

#### API reference for NG-Workshop Card-Grid Component

```TypeScript
import { CardGridModule } from '@softheon/ng-workshop';
```

#### **Add component to your html**
```html
<sws-card-grid [data]="cardContent" [cardSize]="cardSize"></sws-card-grid>
```

#### **Pass the Card-Grid Data**

```Typescript
  public cardContent = [
    {
      title: 'The Great Gatsby',
      subtitle: 'F. Scott Fitzgerald',
      desc: 'The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald.',
      imgUrl: 'https://i.imgur.com/PBaOIbC.gif', // comment out if using fontIcon
      // fontIcon: 'fas fa-anchor', // uncomment if using imgUrl
      linkTitle: 'Learn More',
      link: './home'
    }
  ];
```

#### **Configurations**

The input configuration `cardSize` adjusts the card size and style.

Example Configuration (Optional):

```Typescript
  public cardSize = 'md';
```


#### **Configuration Properties**

| Configuration Key | Example            | Required             | Description     |
|-------------------|--------------------|----------------------|-----------------|
| cardSize          | 'lg' / 'md' / 'sm' | no (default is 'sm') | Card size style |

#### **Card Content  Properties**

| Key       | Type   | Example                           | Description                                 |
|-----------|--------|-----------------------------------|---------------------------------------------|
| title     | string | 'Epic Card Title'                 | Card Title, hidden if no value              |
| subtitle  | string | 'Epic Subtitle'                   | Card Subtitle, hidden if no value           |
| desc      | string | 'Lorem ipsum dolor dit amet'      | Card Description, hidden if no value        |
| fontIcon  | string | 'fas fa-anchor'                   | font awesome icon class, hidden if no value |
| imgUrl    | string | 'https://i.imgur.com/PBaOIbC.gif' | background image url, hidden if no value    |
| linkTitle | string | 'Get Started'                     | link text & hover title, hidden if no value |
| link      | string | './home'                          | link url (routerLink), hidden if no value   |

#### **Examples**
Left to Right: 'lg', 'md', 'sm' (default)

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Exmaple-Icons.png "NG Workshop Example")
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Example-Images.png "NG Workshop Example")

### **Header**
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/Workshop_HeaderNav_Example1.png "NG Workshop Example")

#### `<sws-header>` is a component used to render a navigation header. Entirely highly configurable, highly customizable, and keyboard tab-able.

#### API reference for NG-Workshop Header Component


Module.TS:

```TypeScript
import { HeaderModule } from '@softheon/ng-workshop';
```

Component.ts:

```TypeScript
import { IHeader, HeaderConfig } from '@softheon/ng-workshop';
```


#### **Add component to your html**

```html
<sws-header [navData]="navigation" [config]="headerConfig"></sws-header>
```

Example with Search Event Emmitter :

```html
<sws-header [navData]="navigation" [config]="headerConfig" (searchCriteria)="searchSomething($event)"></sws-header>
```

Example with ng-content (calling a function instead of changing router link):

```html
  <sws-header [navData]="navigation" [config]="headerConfig" (searchCriteria)="searchSomething($event)">
    <!-- put your dynamic content here -->
    <div header full-height flex-container align-items-v m-l-15>
        <sws-breadcrumb [breadcrumbData]="breadcrumbData" [darkTheme]="true" [headerBreadcrumbs]="true"></sws-breadcrumb>
    </div>

    <div usermenu>
      <ul m-a-0 p-l-0>
        <li flex-container sws-nav-menu__list-item>
          <a
            href="javascript:void(0);"
            full-width
            sws-link
            p-a-15
            (click)="switchLanguage()">
            <span m-r-10> <i class="fas fa-chess"></i> </span> Switch
          </a>
        </li>
      </ul>
      <div p-a-10><i>This is custom html!</i></div>
    </div>

    <div leftmenu>
      <div p-a-10>This is also custom html!</div>
    </div>
    <!-- end dynamic content -->
  </sws-header>
  ```

  The header can include 3 areas for custom content. Add the attribute `header` to the div for it to go in the header bar (to the right of the logo, and left of quicklinks). Add the attribute `usermenu` to the div for it to go in the user menu dropdown. Add the attribute `leftmenu` to the div for it to go in the left menu.

**TIP: If you don't provide any navData it will display an empty header**

#### **Pass the Header Data**

This will render the header in your workshop theme color with only the logo text "Navigation"

```Typescript
  public navigation: IHeader = {
    logoText: 'Navigation',
  };

  public headerConfig: HeaderConfig = new HeaderConfig();

  ngOnInit() {
    this.headerConfig.theme = 'theme';
  }
```

This will render the light colored header with only a logo image and quick links

```Typescript

  public navigation: IHeader = {
    logoImageUrl: 'https://softheonworkshopstorage.blob.core.windows.net/workshopcontainer/workshop-logo-anvil.svg',
    quickLinks: [
      {
        linkUrl: './about',
        linkText: 'About Us',
        fontAwesomeIcon: 'fas fa-chess'
      },
      {
        linkUrl: './solutions',
        linkText: 'Our Solutions',
        fontAwesomeIcon: 'fas fa-anchor'
      },
      {
        linkUrl: './contact',
        linkText: 'Contact Us',
        fontAwesomeIcon: 'fas fa-coffee'
      },
      {
        linkUrl: './blog',
        linkText: 'Blog'
      },
    ],
  };

  public headerConfig: HeaderConfig = new HeaderConfig();

  ngOnInit() {
    this.headerConfig.theme = 'light';
  }
```

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/Workshop_HeaderNav_Example1.png "NG Workshop Example")

This will render the dark colored header with only a text logo, searchbar, left menu navigation, and user menu

```Typescript

  public navigation: IHeader = {
    logoText: 'The Great Gatsby',
    userName: 'Jay Gatsby',
    userEmail: 'jay@thegreatgatsby.com',
    userMenuLinks: [
      {
        linkUrl: './home',
        linkText: 'Settings',
        fontAwesomeIcon: 'fas fa-anchor'
      },
      {
        linkUrl: './contact',
        linkText: 'Languages',
        fontAwesomeIcon: 'fas fa-chess'
      },
      {
        linkUrl: './about/ourstory',
        linkText: 'Logout'
      }
    ],
    headingText : 'External Links',
    menuLinks: [
      {
        linkUrl: './app1',
        linkText: 'Left Menu Link A',
      },
      {
        linkUrl: './app2',
        linkText: 'Left Menu Link B',

      },
      {
        linkUrl: './app3',
        linkText: 'Left Menu Link C'
      }
    ],
  };

  public headerConfig: HeaderConfig = new HeaderConfig();

  ngOnInit() {
    this.headerConfig.displayAppMenu = true;
    this.headerConfig.displaySearch = true;
    this.headerConfig.theme = 'theme';
  }
```

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/Workshop2_Header1.jpg "NG Workshop Example")

This will render the light theme header with only an svg image logo and left menu navigation (with custom section heading text)

```Typescript

  public navigation: IHeader = {
    logoImageUrl: 'http://tiny.cc/4oe4uy',
    logoLink: './customhomepage',
    appHeadingText: 'Additional Apps',
    headingText: 'External Links',
    applicationLinks: [
      {
        linkUrl: './home',
        linkText: 'Clarity',
        fontAwesomeIcon: 'fas fa-chess'
      },
      {
        linkUrl: './contact',
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
        externalLinkUrl: 'https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html',
        linkText: 'Left Menu Link A',
      },
      {
        linkUrl: './app2',
        linkText: 'Left Menu Link B',

      },
      {
        linkUrl: './contact',
        linkText: 'Left Menu Link C'
      }
    ],
  };

  public headerConfig: HeaderConfig = new HeaderConfig();

  ngOnInit() {
    this.headerConfig.displayAppMenu = true;
    this.headerConfig.theme = 'light';
  }
```

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/Workshop2_Header2.jpg "NG Workshop Example")

This will render the theme colored header with an external logo url, an external link in the header quick links, and subheader menu

```Typescript

  public navigation: IHeader = {
    logoImageUrl: 'http://tiny.cc/i5e4uy',
    externalLogoLink: 'https://www.softheon.com/Site/home',
    quickLinks: [
      {
        externalLinkUrl: 'https://www.softheon.com/Site/home',
        linkText: 'Contact',
      },
      {
        linkUrl: './blog',
        linkText: 'Blog'
      },
    ],
    subHeaderLinks: [
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
  };

  public headerConfig: HeaderConfig = new HeaderConfig();

  ngOnInit() {
    this.headerConfig.displaySubNavMenu = true;
    this.headerConfig.theme = 'theme';
  }
```

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/Workshop_HeaderNav_Example4.png "NG Workshop Example")

When there are more than 4 quick links, the ui renders them under the header.

```Typescript

  public navigation: IHeader = {
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
  };

  public headerConfig: HeaderConfig = new HeaderConfig();

  ngOnInit() {
    this.headerConfig.displaySearch = true;
    this.headerConfig.displayUserMenu = true;
  }
```

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/Workshop2_Header3.jpg "NG Workshop Example")


#### **Configuration Properties**

| Configuration Key | Example                               | Required                | Description                    |
|-------------------|---------------------------------------|-------------------------|--------------------------------|
| displayAppMenu    | 'true / false'                        | no (default is 'false') | Display left menu              |
| displaySearch     | 'true / false'                        | no (default is 'false') | Display search bar             |
| displaySubNavMenu | 'true / false'                        | no (default is 'false') | Display sub nav menu           |
| displayUserMenu   | 'true / false'                        | no (default is 'false') | Display user icon and dropdown |
| theme             | 'dark' / 'light' / 'theme'  / 'clear' | no (default is 'dark')  | The header theme color         |
| smallLogo         | 'true / false'                        | no (default is 'false') | Gives logo max-width of 64px   |

#### **Header Content 'IHeader' Properties**

**TIP: All properties are optional**
**TIP: All external links open in new tab as target="_blank"**

| Key              | Type    | Example                           | Description                                                                  |
|------------------|---------|-----------------------------------|------------------------------------------------------------------------------|
| userName         | string  | 'Jay Gatsby'                      | User's name in the user menu                                                 |
| userEmail        | string  | 'jay@thegreatgatsby.com'          | User's email  user menu                                                      |
| logoText         | string  | 'The Great Gatsby'                | Header Text as Logo                                                          |
| logoImageUrl     | string  | 'https://i.imgur.com/PBaOIbC.gif' | Header Logo image url                                                        |
| logoLink         | string  | './customhomepage'                | Header Logo - If the logo is to go to a different routerLink instead of '/'  |
| externalLogoLink | string  | 'https://www.google.com/'         | Header Logo - Clicking logo goes to external link                            |
| appHeadingText   | string  | 'Additional Apps'                 | Custom text for application links in the left menu, default : "Applications" |
| headingText      | string  | 'External Links'                  | Custom text for secondary links in the left menu, default : "Regular Links"  |
| userMenuLinks    | ILink[] | 'userMenuLinks: [{...}]'          | ILink Object Array of link data in the user menu                             |
| applicationLinks | ILink[] | 'applicationLinks: [{...}]'       | ILink Object Array of link data in the left menu                             |
| menuLinks        | ILink[] | 'menuLinks: [{...}]'              | ILink Object Array of link data in the left menu                             |
| quickLinks       | ILink[] | 'quickLinks: [{...}]'             | ILink Object Array of link data in the header                                |
| subHeaderLinks   | ILink[] | 'subHeaderLinks: [{...}]'         | ILink Object Array of link data in the subheader                             |

#### **Header Link 'ILink' Properties**

**TIP: *Either linkUrl or externalLinkUrl must be provided in an ILink object**

| Key             | Type   | Required  | Example                   | Description                                  |
|-----------------|--------|-----------|---------------------------|----------------------------------------------|
| linkText        | string | required  | 'Epic Subtitle'           | The link text                                |
| linkUrl         | string | optional* | './contact'               | The link url                                 |
| externalLinkUrl | string | optional* | 'https://www.google.com/' | The external link url, opens target="_blank" |
| fontAwesomeIcon | string | optional  | 'fas fa-anchor'           | Font Awesome icon class                      |

### **Breadcrumbs**
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop_Breadcrumbs4.png "NG Workshop Example")

#### `<sws-breadcrumbs>` is a component used to render breadcrumbs from an object array

#### API reference for NG-Workshop Breadcrumb Component

Module.ts:

```TypeScript
import { BreadcrumbModule } from '@softheon/ng-workshop';
```

Component.ts:

```TypeScript
import { IBreadcrumb } from '@softheon/ng-workshop';

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
```

#### **Add component to your html**

```html
<sws-breadcrumb [breadcrumbData]="breadcrumbData"></sws-breadcrumb>
```

Example of breadcrumbs using dark theme

```html
<sws-breadcrumb [breadcrumbData]="breadcrumbData" [darkTheme]="true" [maxBreadcrumbs]="4"></sws-breadcrumb>
```

Example of breadcrumbs in Header component

```html
<sws-header [navData]="navigation" [config]="headerConfig">
  <!-- put your dynamic content here -->
  <div header full-height flex-container align-items-v m-l-15>
      <sws-breadcrumb [breadcrumbData]="breadcrumbData" [darkTheme]="true" [headerBreadcrumbs]="true"></sws-breadcrumb>
  </div>
</sws-header>
```

#### **Breadcrumbs 'IBreadcrumb' Properties**

| Key        | Type    | Required | Example                                  | Description            |
|------------|---------|----------|------------------------------------------|------------------------|
| breadcrumb | ILink[] | yes      | {linkText: 'Softheon',linkUrl: './home'} | the breadcrumbs object |

**Additional Breadcrumb Properties (Added to html as inputs)**

| Key               | Type    | Required                      | Example    | Description                                                    |
|-------------------|---------|-------------------------------|------------|----------------------------------------------------------------|
| darkTheme         | boolean | optional                      | true/false | Toggle dark theme for the breadcrumbs                          |
| headerBreadcrumbs | boolean | optional                      | true/false | Set to true when displaying breadcrumbs in the header          |
| maxBreadcrumbs    | number  | optional (default value is 3) | 4          | The maximum number of breadcrumbs to display before collapsing |

#### **Breadcrumbs Link 'ILink' Properties**

**TIP: *Either linkUrl or externalLinkUrl must be provided in an ILink object**

| Key             | Type   | Required  | Example                   | Description                                  |
|-----------------|--------|-----------|---------------------------|----------------------------------------------|
| linkText        | string | required  | 'Epic Subtitle'           | The link text                                |
| linkUrl         | string | optional* | './contact'               | The link url                                 |
| externalLinkUrl | string | optional* | 'https://www.google.com/' | The external link url, opens target="_blank" |
| fontAwesomeIcon | string | optional  | 'fas fa-anchor'           | Font Awesome icon class                      |

Examples:

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop_Breadcrumbs0.png "NG Workshop Example")
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop_Breadcrumbs1.png "NG Workshop Example")
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop_Breadcrumbs2.png "NG Workshop Example")


### **Footer**
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Footer-1.png "NG Workshop Example")

#### `<sws-footer>` is a component used to render a footer.


#### API reference for NG-Workshop Footer Component

Module.ts:

```TypeScript
import { FooterModule } from '@softheon/ng-workshop';
```

Component.ts:

```TypeScript
import { IFooter, FooterConfig } from '@softheon/ng-workshop';

public footer: IFooter = {
    contactPhoneNumber: '5555555555',
    copyrightText: '2018 Workshop, All Rights Reserved',
};

public footerConfig: FooterConfig = new FooterConfig();

ngOnInit() {
  this.footerConfig.theme = 'light';
  this.footerConfig.size = 'md';
}
```

Styles.css (or global CSS file):

```CSS
  html, body {
      height: 100%;
  }
```

#### **Add component to your html**

```html
<sws-footer [footerData]="footer" [config]="footerConfig"></sws-footer>
```

Example HTML with flexbox positioning:

```html
<div flex-container-column flex-space-between full-height>
  <div>
    <!-- Content Goes here -->
   </div>
   <sws-footer [footerData]="footer" [config]="footerConfig"></sws-footer>
</div>
```

#### **Footer Content 'IFooter' Properties**
**TIP: All properties are optional**
**TIP: All external links open in new tab as target="_blank"**

| Key                 | Type    | Example                                               | Description                         |
|---------------------|---------|-------------------------------------------------------|-------------------------------------|
| footerLogoUrl       | string  | 'https://i.imgur.com/PBaOIbC.gif'                     | The Footer Logo Url                 |
| copyrightText       | string  | '2018 Workshop, All Rights Reserved'                  | The Copyright Text                  |
| releaseVersionNo    | string  | '1.0.0.beta'                                          | The Release Version Number          |
| terms               | ILink   | 'terms: {...}'                                        | The Terms of Use Link               |
| privacy             | ILink   | 'privacy: {...}'                                      | The Privacy Policy Link             |
| contactUs           | ILink   | 'contactUs: {...}'                                    | The Contact Us Link Object          |
| contactTitle        | string  | 'Contact Us'                                          | The Contact Title Text              |
| contactPhoneNumber  | string  | '5555555555'                                          | The Contact Phone Number            |
| contactEmail        | string  | 'hello@example.com'                                   | The Contact Email                   |
| contactAddress      | string  | '1 Street, Awesome City, State, Zip'                  | The Contact Address                 |
| aboutTitle          | string  | 'About Our Company'                                   | The About Section Description Title |
| aboutText           | string  | 'This is how awesome we are.'                         | The About Section Description Text  |
| linkGroup1Title     | string  | 'Quick Links'                                         | The Link Group 1 title              |
| linkGroup2Title     | string  | 'Resources'                                           | The Link Group 1 title              |
| linkGroup1          | ILink[] | 'linkGroup1: [{...}]'                                 | The Link Group 1                    |
| linkGroup2          | ILink[] | 'linkGroup2: [{...}]'                                 | The Link Group 2                    |
| socialMediaTitle    | string  | 'Connect With Us'                                     | The Social Media Title              |
| socialLinkedInUrl   | string  | 'https://www.linkedin.com/company/softheon'           | The Social Media Url                |
| socialFacebookUrl   | string  | 'https://facebook.com/'                               | The Social Media Url                |
| socialTwitterUrl    | string  | 'https://twitter.com/'                                | The Social Media Url                |
| socialYoutubeUrl    | string  | 'https://www.youtube.com/'                            | The Social Media Url                |
| socialInstagramUrl  | string  | 'https://www.instagram.com'                           | The Social Media Url                |
| socialGooglePlusUrl | string  | 'https://plus.google.com'                             | The Social Media Url                |
| socialPinterestUrl  | string  | 'https://www.pinterest.com/'                          | The Social Media Url                |
| socialGithubUrl     | string  | 'https://github.com/Softheon/NG-Workshop'             | The Social Media Url                |
| socialNPMUrl        | string  | 'https://www.npmjs.com/package/@softheon/ng-workshop' | The Social Media Url                |

#### **Navigation Header Link 'ILink' Properties**

**TIP: *Either linkUrl or externalLinkUrl must be provided in an ILink object**

| Key             | Type   | Required  | Example                   | Description                                  |
|-----------------|--------|-----------|---------------------------|----------------------------------------------|
| linkText        | string | required  | 'Epic Subtitle'           | The link text                                |
| linkUrl         | string | optional* | './contact'               | The link url                                 |
| externalLinkUrl | string | optional* | 'https://www.google.com/' | The external link url, opens target="_blank" |
| fontAwesomeIcon | string | optional  | 'fas fa-anchor'           | Font Awesome icon class                      |

#### **Configuration Properties**

| Configuration Key | Example                                       | Required | Description            |
|-------------------|-----------------------------------------------|----------|------------------------|
| theme             | 'dark' / 'light' / 'grey' / 'clear' / 'theme' | yes      | The footer theme color |
| size              | 'sm' / 'md' / 'lg'                            | yes      | The footer size style  |

Examples:

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Footer-1.png "NG Workshop Example")
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Footer-2.png "NG Workshop Example")
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Footer-3.png "NG Workshop Example")



### **Multi-Stepper**
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-MultiStepper_Header.png "NG Workshop Example")


#### `<sws-multi-stepper>` is a component used to render a two-dimentional multi-step navbar, so developers can quickly create progress indicator and navigation wizards based on router outlet urls. The navigation is also accessibility-minded and keyboard tab-able.

#### API reference for NG-Workshop Multi-Stepper Component

```TypeScript
import { MultiStepperModule } from '@softheon/ng-workshop';
```

#### **Add component to your html**

```html
<sws-multi-stepper [config]=”configVar” [data]=”dataVar” (stepData)="customMethod($event)"></sws-multi-stepper>
```

The multistepper component receives two @inputs: one required [data] and one optional [config].

On route change, the multistepper component also emits data. Below are the possible event emmiters to watch:

- **currentStep** - the current step (Root Page) object
- **currentSubStep** - the current sub-step (Page) object
- **currentIndex** - the current index (ie. for progress completion)
- **stepData** - includes all the above

#### **Pass the Multi-Step Data**

Example with Plain Text:

**TIP: A minimum of two steps are REQUIRED for the navigation to display. Essentially a start and end node.**

```Typescript
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
```

Example with Translation Keys Text (using ngx-translate):

```Typescript
  this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
    return this.data = [
      { page: this.translateService.instant('nav.step1'), url: './step1' },
      {
        page: this.translateService.instant('nav.step2'),
        url: './step2',
        subPages: [
          { page: this.translateService.instant('nav.part1'), url: './step2/page1' },
          { page: this.translateService.instant('nav.part2'), url: './step2/page2' },
          { page: this.translateService.instant('nav.part3'), url: './step2/page3' }
        ]
      },
      { page: this.translateService.instant('nav.step3'), url: './step3' }
    ];
  });
```

**TIP 1: If you are using ngx-translate, wrap the component in an ngIf**

**TIP 2: We recommend putting the multistepper above your `<router-outlet></router-outlet>` html.**

```html
<div *ngIf="data">
    <sws-multi-stepper [data]="data" [config]="config" (stepData)="currentStep($event)"></sws-multi-stepper>
</div>
```

#### **Configurations**

Example Configuration (Optional):

```Typescript
  public config = {
    dir: 'v',
    markStepsCompleted: false,
    navTxt: 'Check Out This Sweet Nav!'
  };
```
#### **Configuration Properties**

| Configuration Key  | Example          | Required                     | Description                                                 |
|--------------------|------------------|------------------------------|-------------------------------------------------------------|
| dir                | 'v' / 'h'        | no (default is 'h')          | Direction of the navigation                                 |
| navTxt             | 'My Awesome Nav' | no (default is 'Navigation') | Text that's displayed next to the mobile/vertical menu icon |
| showLastNav        | true / false     | no (default is false)        | On horizontal view the text                                 |
| markStepsCompleted | true / false     | no (default is true)         | Indicates progress completion at each page index            |
| skipAhead          | true / false     | no (default is true)         | Allows the user to skip ahead of their current step         |

#### **Examples**

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Example-1.png "NG Workshop Example")

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Example-2.png "NG Workshop Example")
