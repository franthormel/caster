import { WeatherHourlyChance } from './weather-hourly-chance.models';
import { WeatherReadingDetailFeelsLike } from './weather-reading-detail-feels-like.models';
import { WeatherReadingDetailTemperature } from './weather-reading-detail-temperature.models';
import { WeatherCondition } from './weather-condition.models';

export interface WeatherReading {
  dt: number;
  clouds: number;
  dew_point: number;
  feels_like: number | WeatherReadingDetailFeelsLike;
  humidity: number;
  rain?: number | WeatherHourlyChance;
  snow?: number | WeatherHourlyChance;
  pop?: number;
  pressure: number;
  sunrise?: number;
  sunset?: number;
  temp: number | WeatherReadingDetailTemperature;
  uvi: number;
  visibility?: number;
  weather: WeatherCondition[];
  wind_deg: number;
  wind_gust?: number;
  wind_speed: number;
}
