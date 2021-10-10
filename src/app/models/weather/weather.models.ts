import { WeatherReadingMinutely } from './weather-reading-minutely.models';
import { WeatherReadingCurrent } from './weather-reading-current.models';
import { WeatherReadingHourly } from './weather-reading-hourly.models';
import { WeatherReadingDaily } from './weather-reading-daily.models';
import { WeatherAlert } from './weather-alert.models';

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
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: WeatherReadingCurrent;
  minutely?: WeatherReadingMinutely[];
  hourly: WeatherReadingHourly[];
  daily: WeatherReadingDaily[];
  alerts?: WeatherAlert[];
}
