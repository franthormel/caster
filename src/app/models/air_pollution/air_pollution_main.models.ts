/**
 * Based on [Air Quality Index (CAQI)](https://en.wikipedia.org/wiki/Air_quality_index#CAQI)
 * * 1 means `Good`
 * * 2 means `Fair`
 * * 3 means `Moderate`
 * * 4 means `Poor`
 * * 5 means `Very Poor`
 */
export interface AirPollutionMain {
  aqi: number;
}
