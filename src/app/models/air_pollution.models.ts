import { AirPollutionReading } from './air_pollution_reading.models';
import { Coordinates } from './coordinates.models';

export interface AirPollution {
  coordinates: Coordinates;
  list: AirPollutionReading[];
}
