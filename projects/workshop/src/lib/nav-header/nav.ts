/** The Link Interface */
export interface ILink {

    /** The Link Text */
    linkText: string;

    /** The Link Url */
    linkUrl?: string;

    /** The External Link Url */
    externalLinkUrl?: string;

    /** The Font Awesome icon class */
    fontAwesomeIcon?: string;

    /** To calls a method instead */
    emitEvent?: boolean;
}

/** The Navigation Interface */
export interface IHeader {

    /** The user name */
    userName?: string;

    /** The user email */
    userEmail?: string;

    /** The logo text */
    logoText?: string;

    /** The logo image url */
    logoImageUrl?: string;

    /** If the logo is to go to a different routerLink instead of '/' */
    logoLink?: string;

    /** Header Logo - Clicking logo goes to external link */
    externalLogoLink?: string;

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
export interface IHeaderConfig {
    displayAppMenu?: boolean;
    displaySearch?: boolean;
    displaySubNavMenu?: boolean;
    displayUserMenu?: boolean;
    theme?: string;
    smallLogo?: boolean;
}

/** The Nav Congif Class */
export class HeaderConfig implements IHeaderConfig {
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

    /** The small logo setting */
    public smallLogo?: boolean;

    /** The Constructor for the Nav Config */
    constructor(appMenu?: boolean, search?: boolean, userMenu?: boolean, subNavMenu?: boolean, theme?: string, smLogo?: boolean) {
        this.displayAppMenu = appMenu != null ? appMenu : false;
        this.displaySearch = search != null ? search : false;
        this.displayUserMenu = userMenu != null ? userMenu : false;
        this.displaySubNavMenu = subNavMenu != null ? subNavMenu : false;
        this.theme = theme != null ? theme : 'dark';
        this.smallLogo = smLogo != null ? smLogo : false;
    }
}
