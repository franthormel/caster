import { WeatherReading } from './weather_reading.models';

export interface WeatherReadingDaily extends WeatherReading {
  moon_phase: number;
  moonrise: number;
  moonset: number;
}
