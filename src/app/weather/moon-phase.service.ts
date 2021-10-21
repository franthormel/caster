import { Injectable } from '@angular/core';
import { ICONS_MOON } from '../data/icons/icons-moon.data';
import { MOON_DESCRIPTIONS } from '../data/moon-phase/descriptions.data';

@Injectable({
  providedIn: 'root',
})
export class MoonPhaseService {
  /**
   * Moon phase. 0 and 1 are 'new moon', 0.25 is 'first quarter moon', 0.5 is 'full moon' and
   * 0.75 is 'last quarter moon'. The periods in between are called 'waxing crescent',
   * 'waxing gibous', 'waning gibous', and 'waning crescent', respectively.
   * @param value Whole number (0 to 1)
   * @returns string
   */
  description(value: number): string {
    return MOON_DESCRIPTIONS[this._index(value)];
  }

  /**
   * Returns string to be used for SVG `mat-icon`
   * @param value Decimal value (0 to 1)
   * @returns string
   */
  icon(value: number): string {
    return ICONS_MOON[this._index(value)];
  }
  
  private _index(value: number): number {
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
