import { WeatherReadingMinutely } from './weather_reading_minutely.models';
import { WeatherReadingCurrent } from './weather_reading_current.models';
import { WeatherReadingHourly } from './weather_reading_hourly.models';
import { WeatherReadingDaily } from './weather_reading_daily.models';
import { WeatherAlert } from './weather_alert.models';
import { Coordinates } from '../coordinates.models';

/**
 * * `coords` Data received individual properties: `lat` and `lon` but use `Coordinates` instead
 * * `timezone` Timezone name for the requested location
 * * `timezone_offset` Shift in seconds from UTC
 * * `alerts` National weather alerts data from major national weather warning systems
 * * `current` Current weather data
 * * `minutely` Minute forecast weather data *(1 hour)*
 * * `hourly` Hourly forecast weather data *(47 hours)*
 * * `daily` Daily forecast weather data *(1 week)*
 */
export interface Weather {
  coordinates: Coordinates;
  timezone: string;
  timezone_offset: number;
  current: WeatherReadingCurrent;
  minutely?: WeatherReadingMinutely[];
  hourly: WeatherReadingHourly[];
  daily: WeatherReadingDaily[];
  alerts?: WeatherAlert[];
}
