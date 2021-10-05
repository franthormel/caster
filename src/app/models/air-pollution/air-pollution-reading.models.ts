import { AirPollutionMain } from './air-pollution-main.models';
import { AirPollutionComponents } from './air-pollution-components.models';

/**
 * * `main` `AirPollutionMain`
 * * `components` `AirPollutionComponents`
 * * `dt` Date and time, Unix, UTC *(seconds)*
 */
export interface AirPollutionReading {
  main: AirPollutionMain;
  components: AirPollutionComponents;
  dt: number;
}
