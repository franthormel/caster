/**
 * Based on [Air Quality Index (CAQI)](https://en.wikipedia.org/wiki/Air_quality_index#CAQI)
 * - 1 = Good
 * - 2 = Fair
 * - 3 = Moderate
 * - 4 = Poor
 * - 5 = Very Poor
 */
export interface AirPollutionMain {
  aqi: number;
}
