export interface ILink {
    linkUrl: string;
    linkText: string;
    newTab?: boolean;
    fontAwesomeIcon?: string;
}

export interface INavigation {

    /** The user name */
    userName?: string;

    /** The user email */
    userEmail?: string;

    /** The logo text */
    logoText?: string;

    /** The logo image url */
    logoImageUrl?: string;

    /** The logo link url */
    logoLink?: boolean;

    /** Whether or not to open the logo link in a new tab */
    logoLinkTarget?: string;

    /** Left Menu Applications Heading Text */
    appHeadingText?: string;

    /** Left Menu Heading Text */
    headingText?: string;

    /** The User Menu Dropdown Links */
    userMenuLinks?: ILink[];

    /** The Application Links in the Left Menu */
    applicationLinks?: ILink[];

    /** The Menu Links in the Left Menu Tab */
    menuLinks?: ILink[];

    /** The Quick Links that appear in the header */
    quickLinks?: ILink[];

    /** The Sub Header that appear beneath the header */
    subHeaderLinks?: ILink[];
}

/** The Nav Config Interface */
export interface INavConfig {
    displayAppMenu?: boolean;
    displaySearch?: boolean;
    displaySubNavMenu?: boolean;
    displayUserMenu?: boolean;
    theme?: string;
}

export class NavConfig implements INavConfig {
    /** Whether or not to display the Left Nav Applications Menu */
    public displayAppMenu?: boolean;

    /** Whether or not to display the searchbar */
    public displaySearch?: boolean;

    /** Whether or not to display the Sub Navigation Menu */
    public displaySubNavMenu?: boolean;

    /** Whether or not to User Dropdown Menu */
    public displayUserMenu?: boolean;

    /** The theme config */
    public theme?: string;

    /** The Constructor for the Nav Config */
    constructor(appMenu?: boolean, search?: boolean, userMenu?: boolean, subNavMenu?: boolean, theme?: string) {
        this.displayAppMenu = appMenu != null ? appMenu : false;
        this.displaySearch = search != null ? search : false;
        this.displayUserMenu = userMenu != null ? userMenu : false;
        this.displaySubNavMenu = subNavMenu != null ? subNavMenu : false;
        this.theme = theme != null ? theme : 'dark';
    }
}
