import { WeatherReading } from './weather-reading.models';

export interface WeatherReadingDaily extends WeatherReading {
  moon_phase: number;
  moonrise: number;
  moonset: number;
}
