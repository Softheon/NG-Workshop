# NG-Workshop

<p style="text-align: center;">
<img width="200" alt="NG-Workshop" src="https://softheonworkshop.azureedge.net/workshopcontainer/workshop-logo-anvil.svg">
</p>

## NG-Workshop is a suite of modern Angular Components built on the Softheon Workshop Design System.


## **Quick Links**
- [Getting Started](#getting-started)
- [Components](#components)
     * [Multi-Stepper](#multi-stepper)
     * [Card-Grid](#card-grid)
- [NPM Repository](https://www.npmjs.com/package/@softheon/ng-workshop)


## **Getting Started**

### **Step 1: Install NG-Workshop**

#### Install the package.

```shell
npm install --save @softheon/ng-workshop@latest
```

#### Include a link to Softheon Workshop in your index.html

```html
<link rel="stylesheet" href="https://softheonworkshop.azureedge.net/alpha-9/workshop.min.css">
```

#### Include a link to [Font Awesome 5 SVG with JS Library](https://fontawesome.com/get-started/svg-with-js) in your index.html

Example:

```html
<script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
```

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
| ------------------ | :--------------: | :--------------------------: | ----------------------------------------------------------: |
| dir                | 'v' / 'h'        | no (default is 'h')          | Direction of the navigation                                 |
| navTxt             | 'My Awesome Nav' | no (default is 'Navigation') | Text that's displayed next to the mobile/vertical menu icon |
| showLastNav        | true / false     | no (default is false)        | On horizontal view the text                                 |
| markStepsCompleted | true / false     | no (default is true)         | Indicates progress completion at each page index            |

#### **Examples**

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Example-1.png "NG Workshop Example")

![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Example-2.png "NG Workshop Example")


### **Card-Grid**
![alt text](https://softheonworkshop.azureedge.net/ng-workshop/NG-Workshop-Example-Card-Grid-Header.png "NG Workshop Example")

#### `<sws-card-grid>` is a component used to render a grid of cards styled content. Links are keyboard tab-able, and on initialization the grid displays a [GSAP](https://greensock.com/) cascading loading animation. 

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
| ----------------- | :----------------: | :------------------: | --------------: |
| cardSize          | 'lg' / 'md' / 'sm' | no (default is 'sm') | Card size style |

#### **Card Conent  Properties**

| Key       | Type   | Example                           | Description                                 |
| --------- | :----: | :-------------------------------: | ------------------------------------------: |
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