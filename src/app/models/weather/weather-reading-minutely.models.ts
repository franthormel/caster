/**
 * * `dt` Time, Unix, UTC (seconds)
 * * `precipitation` Precipitation volume, mm
 */
export interface WeatherReadingMinutely {
  dt: number;
  precipitation: number;
}
