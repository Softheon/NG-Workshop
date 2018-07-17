/** The Multistepper Interface */
export interface IStep {
  /** true if the page has been passed */
  isPassed?: boolean;

  /** true if the page is in porogress */
  isInProgress?: boolean;

  /** The page name translation key */
  stepTitle: string;

  /** The page URL */
  stepUrl: string;

  /** The page URL */
  stepIndex: number;
}

export interface IMultiStep {
  /** true if the page has been passed */
  isPassed?: boolean;

  /** true if the page is in porogress */
  isInProgress?: boolean;

  /** The page name translation key */
  stepTitle: string;

  /** The page URL */
  stepUrl: string;

  /** The page URL */
  stepIndex: number;

  /** The SubSteps */
  subSteps?: IStep[];
}


export interface IMultiStep2 {
  /** true if the page has been passed */
  isPassed?: boolean;

  isCurrent?: boolean;

  /** true if the page is in porogress */
  isInProgress?: boolean;

  isSubStep: boolean;

  /** The page name translation key */
  stepTitle: string;

  /** The page URL */
  stepUrl: string;

  /** The page URL */
  stepIndex: number;

}

export interface IMultiStepper {
  menuText?: string;
  steps: IMultiStep[];
}

export interface IMultiStepper2 {
  menuText?: string;
  steps: IMultiStep2[];
}

/** The Nav Config Interface */
export interface IMultiStepperConfig {
  theme?: string;
  size?: string;
}

/** The Nav Congif Class */
export class MultiStepperConfig implements IMultiStepperConfig {
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

/** The Nav Congif Class */
export class MultiStepper implements IMultiStep {
  /** true if the page has been passed */
  public isPassed?: boolean;

  /** true if the page is in porogress */
  public isInProgress?: boolean;

  /** The page name translation key */
  public stepTitle: string;

  /** The page URL */
  public stepUrl: string;

  /** The page URL */
  public stepIndex: number;

  /** The SubSteps */
  public subSteps?: IStep[];

  /** The Constructor for the Nav Config */
  constructor(
    isPassed?: boolean,
    isInProgress?: boolean,
    stepTitle?: string,
    stepUrl?: string,
    stepIndex?: number,
    subSteps?: IStep[]
  ) {
    this.isPassed = isPassed != null ? isPassed : false;
    this.isInProgress = isPassed != null ? isPassed : false;
    this.stepTitle = stepTitle != null ? stepTitle : 'Step';
    this.stepUrl = stepUrl != null ? stepUrl : '/';
    this.stepIndex = stepIndex != null ? stepIndex : 0;
    this.subSteps = subSteps != null ? subSteps : [];
  }
}
