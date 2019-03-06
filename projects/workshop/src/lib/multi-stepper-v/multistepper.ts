/** The Multistep Interface */
export interface IStep {
  /** If the page has been passed */
  isPassed?: boolean;

  /** If the step is Current */
  isCurrent?: boolean;

  /** If the step is a substep */
  isSubStep: boolean;

  /** The page name translation key */
  stepTitle: string;

  /** The page URL */
  stepUrl?: string;

  /** The external page URL */
  stepExternalUrl?: string;

  /** The group of steps + sub-steps */
  stepGroupIndex?: number;

  /** Whether or not to display the Collapsible */
  isCollapsible?: boolean;

  /** Whether or not the step is collapsed */
  isCollapsed?: boolean;
}

/** The Multistepper Interface */
export interface IMultiStepper {

  /** The menu text */
  menuText?: string;

  /** The array of ISteps */
  steps: IStep[];
}
