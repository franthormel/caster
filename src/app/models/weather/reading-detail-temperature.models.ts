import { ReadingDetail } from './reading-detail.models';

/**
 * Units – default: kelvin
 * * `min` Min daily temperature.
 * * `max` Max daily temperature.
 */
export interface ReadingDetailTemperature extends ReadingDetail {
  min: number;
  max: number;
}
