import { ILink } from '../common/link/link';

/** The Link Interface */
export interface IBreadcrumb {

    /** The array of breadcrumb links */
    breadcrumb?: ILink[];

    /** To calls a method instead */
    emitEvent?: boolean;
}
