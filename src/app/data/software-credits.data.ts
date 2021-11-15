import { SoftwareCredits } from '../models/credits.models';
import { VERSION as angularVersion } from '@angular/core';
import { VERSION as materialVersion } from '@angular/material/core';

export const SOFTWARE_CREDITS: SoftwareCredits[] = [
  {
    name: 'Angular',
    enabled: true,
    url: 'https://angular.io/',
    type: 'Framework',
    version: angularVersion.full,
  },
  {
    name: 'Angular Material',
    enabled: true,
    url: 'https://material.angular.io/',
    type: 'Component library',
    version: materialVersion.full,
  },
  {
    name: 'NgRx',
    enabled: true,
    url: 'https://ngrx.io/',
    type: 'State management',
    version: '12.5.1',
  },
  {
    name: 'RxJS',
    enabled: true,
    url: 'https://rxjs.dev/',
    type: 'Reactive extension',
    version: '7.4',
  },
  {
    name: 'Sass',
    enabled: true,
    url: 'https://sass-lang.com/',
    type: 'CSS preprocessor',
    version: '1.43.4',
  },
  {
    name: 'Karma',
    enabled: true,
    url: 'https://karma-runner.github.io/latest/index.html',
    type: 'Test runner',
    version: '6.3.7',
  },
  {
    name: 'Jasmine',
    enabled: true,
    url: 'https://jasmine.github.io/',
    type: 'Test framework',
    version: '3.10.0',
  },
];
