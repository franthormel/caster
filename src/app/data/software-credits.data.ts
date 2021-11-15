import { SoftwareCredits } from '../models/credits.models';

export const SOFTWARE_CREDITS: SoftwareCredits[] = [
  {
    name: 'Angular',
    enabled: true,
    url: 'https://angular.io/',
    type: 'Framework',
  },
  {
    name: 'Angular Material',
    enabled: true,
    url: 'https://unsplash.com/@parrish?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    type: 'Component library',
  },
  // TODO: Add: ngrx, rxjs, scss, and karma. Also see if versions are available
];
