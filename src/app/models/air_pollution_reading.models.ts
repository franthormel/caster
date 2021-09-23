import { AirPollutionMain } from './air_pollution_main.models';
import { AirPollutionComponents } from './air_pollution_components.models';

/**
 * - **datetime** UNIX date and time
 */
export interface AirPollutionReading {
    main: AirPollutionMain,
    components: AirPollutionComponents,
    datetime: number;
}
