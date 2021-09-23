import { AirPollutionMain } from './air_pollution_main.models';
import { AirPollutionComponents } from './air_pollution_components.models';

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
