import { AirPollutionMain } from './air-pollution-main.models';
import { AirPollutionComponents } from './air-pollution-components.models';

export interface AirPollutionReading {
  main: AirPollutionMain;
  components: AirPollutionComponents;
  dt: number;
}
