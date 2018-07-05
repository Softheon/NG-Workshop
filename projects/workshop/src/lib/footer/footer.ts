/** The Footer Interface */
export interface IFooter {

    /** The phone number */
    phoneNumber?: string;
}


/** The Nav Config Interface */
export interface IFooterConfig {
    theme?: string;
}

/** The Nav Congif Class */
export class FooterConfig implements IFooterConfig {

    /** The theme config */
    public theme?: string;

    /** The Constructor for the Nav Config */
    constructor(theme?: string) {
        this.theme = theme != null ? theme : 'dark';
    }
}
