/**
 * The Navigation Page
 */
export class Page {

    /** true if the page has been passed */
    public isPassed: boolean;

    /** The page name translation key */
    public translationKey: string;

    /** The page URL */
    public routerLink: string;

    /** The class associated with the active page */
    public routerLinkActiveClass: string;

    /** True if the page is included */
    public isIncluded: boolean;

    /** Temporary value used for displaying the page */
    public tempDisplay: boolean;

    /**
     * Constructs the object
     * @param transKey The translation key
     * @param routeLink The route link
     * @param passed True if passed
     * @param included True if included
     * @param routeLinkClass The route active link class
     */
    constructor(transKey: string, routeLink: string, passed?: boolean, included?: boolean, routeLinkClass?: string) {
      this.translationKey = transKey;
      this.routerLink = routeLink;
      this.isPassed = passed != null ? passed : false;
      this.isIncluded = included != null ? included : true;
      this.routerLinkActiveClass = routeLinkClass != null ? routeLinkClass : 'active-link';

      this.tempDisplay = false;
    }

    /**
     * Clones the page in a new object
     */
    public clone(): Page {
      return new Page(this.translationKey, this.routerLink, this.isPassed, this.isIncluded, this.routerLinkActiveClass);
    }
  }

  /**
   * The Navigation Root Page
   * subPages The array of Pages
   */
  export class RootPage extends Page {
    /** The sub-pages */
    public subPages: Page[];

    /**
     * Constructs the object
     * @param transKey The translation key
     * @param routeLink The route link
     * @param subPages The sub pages
     * @param passed True if passed
     * @param included True if included
     * @param routeLinkClass The route active link class
     */
    constructor(transKey: string, routeLink: string, subPages?: Page[], passed?: boolean, included?: boolean, routeLinkClass?: string) {
      super(transKey, routeLink, passed, included, routeLinkClass);
      this.subPages = subPages != null ? subPages : [];
    }

    /**
     * Clones the root page in a new object
     */
    public clone(): RootPage {
      const root: RootPage = <RootPage>super.clone();
      root.subPages = [];

      if (this.subPages) {
        this.subPages.forEach(sp => {
          root.subPages.push(sp.clone());
        });
      }

      return root;
    }
  }

