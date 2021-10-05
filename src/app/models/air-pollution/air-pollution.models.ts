import { Coordinates } from '../coordinates.models';
import { AirPollutionReading } from './air-pollution-reading.models';

/**
 * * `coord` `Coordinates`
 * * `list` Array of `AirPollutionReading`.
 * Air pollution forecast is available for *5 days* with
 * an *hourly* granularity(gap).
 */
export interface AirPollution {
  coord: Coordinates;
  list: AirPollutionReading[];
}
