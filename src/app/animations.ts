import { animate, style, transition, trigger } from '@angular/animations';

export const fadeInElement = trigger('fadeInElement', [
  transition('* => *', [style({ opacity: 0 }), animate('250ms ease-in-out')]),
]);
