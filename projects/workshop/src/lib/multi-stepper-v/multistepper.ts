/** The Multistep Interface */
export interface IStep {
  /** If the page has been passed */
  isPassed?: boolean;

  /** If the stepp is Current */
  isCurrent?: boolean;

  /** If the step is a substep */
  isSubStep: boolean;

  /** The page name translation key */
  stepTitle: string;

  /** The page URL */
  stepUrl: string;

  /** The page URL */
  stepIndex: number;

}

/** The Multistepper Interface */
export interface IMultiStepper {

  /** Whether to run the Multistepper in developer mode (can click through steps) */
  devMode?: boolean;

  /** The menu text */
  menuText?: string;

  /** The array of ISteps */
  steps: IStep[];
}
