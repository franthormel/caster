import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInElement = trigger('fadeInElement', [
  transition('* => *', [style({ opacity: 0 }), animate('200ms ease-in-out')]),
]);
