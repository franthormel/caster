import { WeatherReadingMinutely } from './weather-reading-minutely.models';
import { WeatherReadingCurrent } from './weather-reading-current.models';
import { WeatherReadingHourly } from './weather-reading-hourly.models';
import { WeatherReadingDaily } from './weather-reading-daily.models';
import { WeatherAlert } from './weather-alert.models';

export interface WeatherData {
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
