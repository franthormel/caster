import { ReadingDaily } from './reading_daily.models';

/**
 * Units – default: kelvin
 * * `min` Min daily temperature.
 * * `max` Max daily temperature.
 */
export interface ReadingDailyTemperature extends ReadingDaily {
  min: number;
  max: number;
}
