import { ReadingDaily } from './reading-daily.models';

/**
 * Units – default: kelvin
 * * `min` Min daily temperature.
 * * `max` Max daily temperature.
 */
export interface ReadingDailyTemperature extends ReadingDaily {
  min: number;
  max: number;
}
