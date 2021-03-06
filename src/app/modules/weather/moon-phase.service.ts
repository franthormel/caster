import { Injectable } from '@angular/core';

import { ICONS_MOON } from '../../data/icons/moon.data';
import { DESCRIPTIONS } from '../../data/descriptions/moon.data';

@Injectable({
  providedIn: 'root',
})
export class MoonPhaseService {
  description(value: number): string {
    return DESCRIPTIONS[this.index(value)];
  }

  icon(value: number): string {
    return ICONS_MOON[this.index(value)];
  }

  private index(value: number): number {
    let index: number = -1;

    if (value === 0 || value === 1) {
      index = 0;
    } else if (value > 0 && value < 0.25) {
      index = 1;
    } else if (value === 0.25) {
      index = 2;
    } else if (value > 0.25 && value < 0.5) {
      index = 3;
    } else if (value === 0.5) {
      index = 4;
    } else if (value > 0.5 && value < 0.75) {
      index = 5;
    } else if (value === 0.75) {
      index = 6;
    } else if (value > 0.75 && value < 1) {
      index = 7;
    }

    return index;
  }
}
