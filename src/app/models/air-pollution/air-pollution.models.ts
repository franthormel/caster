import { AirPollutionCoordinates } from './air-pollution-coordinates.models';
import { AirPollutionReading } from './air-pollution-reading.models';

export interface AirPollution {
  coord: AirPollutionCoordinates;
  list: AirPollutionReading[];
}
