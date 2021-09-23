import { WeatherDateTime } from './weather_datetime.models';

export interface WeatherReadingMinutely extends WeatherDateTime {
  precipitation: number;
}
