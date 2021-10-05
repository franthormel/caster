/**
 * Return text description for CAQI
 * @param value CAQI number (1 to 5)
 * @returns string
 */
export function describe_aqi(value: number): string {
  let text: string;

  switch (value) {
    case 1:
      text = 'Very good';
      break;
    case 2:
      text = 'Good';
      break;
    case 3:
      text = 'Moderate';
      break;
    case 4:
      text = 'Poor';
      break;
    case 5:
      text = 'Very poor';
      break;
    default:
      text = 'Undefined';
      break;
  }

  return text;
}
