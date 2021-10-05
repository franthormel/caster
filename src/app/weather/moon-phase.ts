/**
 * Categorizes moon phase. Used for moon icons and `moon_phase_text()` 
 * @param value Decimal value (0 to 1)
 * @returns number
 */
export function moon_phase_index(value: number): number {
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

/**
 * Moon phase description. 
 * Derive `value` param using `moon_phase_index()`
 * @param value Integral number (1 to 8)
 * @returns string
 */
export function moon_phase_text(value: number): string {
  let text: string;

  switch (value) {
    case 0:
      text = 'New moon';
      break;
    case 1:
      text = 'Waxing crescent';
      break;
    case 2:
      text = 'First quarter';
      break;
    case 3:
      text = 'Waxing gibbous';
      break;
    case 4:
      text = 'Full moon';
      break;
    case 5:
      text = 'Waning gibbous';
      break;
    case 6:
      text = 'Last quarter';
      break;
    case 7:
      text = 'Waning crescent';
      break;
    default:
      text = 'Undefined';
  }

  return text;
}
