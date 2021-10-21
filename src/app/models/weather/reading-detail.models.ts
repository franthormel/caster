/**
 * Units – default: kelvin
 * * `morn` Morning temperature.
 * * `day` Day temperature.
 * * `eve` Evening temperature.
 * * `night` Night temperature.
 */
export interface ReadingDetail {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
