/**
 * Units – default: kelvin
 * * `morn` Morning temperature.
 * * `day` Day temperature.
 * * `eve` Evening temperature.
 * * `night` Night temperature.
 */
export interface ReadingDaily {
  day: number;
  night: number;
  eve: number;
  morn: number;
}
