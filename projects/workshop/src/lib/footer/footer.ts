import { ILink } from '../common/link/link';

/** The Footer Interface */
export interface IFooter {

  /** The Footer Logo Url */
  footerLogoUrl?: string;

  /** The Contact Us Object (If redirecting to contact page instead of displaying address) */
  contactUs?: ILink;

  /** The Copyright Text */
  copyrightText?: string;

  /** The Release Version Number */
  releaseVersionNo?: string;

  /** The Terms of Use Link */
  terms?: ILink;

  /** The Privacy Policy Link */
  privacy?: ILink;

  /** The About Section Title Text */
  aboutTitle?: string;

  /** The About Section Description Text */
  aboutText?: string;

  /** The Contact Title Text */
  contactTitle?: string;

  /** The Contact Phone number */
  contactPhoneNumber?: string;

  /** The Contact Email */
  contactEmail?: string;

  /** The Contact Address */
  contactAddress?: string;

  /** TODO: Revisit for XL: The Contact Website */
  contactWebsite?: string;

  /** The Link Group 1 Title */
  linkGroup1Title?: string;

  /** The Link Group 2 Title */
  linkGroup2Title?: string;

  /** The Link Group 1 */
  linkGroup1?: ILink[];

  /** The Link Group 2 */
  linkGroup2?: ILink[];

  /** The Social Media Title */
  socialMediaTitle?: string;

  /** The Social Media LinkedIn Url */
  socialLinkedInUrl?: string;

  /** The Social Media Facebook Url */
  socialFacebookUrl?: string;

  /** The Social Media Twitter Url */
  socialTwitterUrl?: string;

  /** The Social Media Youtube Url */
  socialYoutubeUrl?: string;

  /** The Social Media Instagram Url */
  socialInstagramUrl?: string;

  /** The Social Media Google Plus Url */
  socialGooglePlusUrl?: string;

  /** The Social Media Pinterest Url */
  socialPinterestUrl?: string;

  /** The Social Media Url */
  socialGithubUrl?: string;

  /** The Social Media NPM Url */
  socialNPMUrl?: string;
}

/** The Nav Config Interface */
export interface IFooterConfig {
  theme?: string;
  size?: string;
}

/** The Nav Congif Class */
export class FooterConfig implements IFooterConfig {
  /** The theme config */
  public theme?: string;

  /** The footer size config */
  public size?: string;

  /** The Constructor for the Nav Config */
  constructor(theme?: string, size?: string) {
    this.theme = theme != null ? theme : 'dark';
    this.size = size != null ? size : 'sm';
  }
}
