import { ReadingDailyFeelsLike } from './reading-daily-feelslike.models';
import { ReadingDailyTemperature } from './reading-daily-temperature.models';
import { WeatherCondition } from './weather-condition.models';

/**
 * * `clouds` Cloudiness, %
 * * `dew_point` Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin
 * * `feels_like` This accounts for the human perception of weather
 * * `humidity` Humidity, %
 * * `rain` Precipitation volume, mm
 * * `snow` Snow volume, mm
 * * `pop` Probability of precipitation
 * * `pressure` Atmospheric pressure on the sea level, hPa
 * * `sunrise` Sunrise time, Unix, UTC (seconds)
 * * `sunset` Sunset time, Unix, UTC (seconds)
 * * `temp` Sunrise time, Unix, UTC (seconds)
 * * `uvi` UV index
 * * `visibility` Average visibility, metres
 * * `weather` Weather condition(s)
 * * `wind_deg` Wind direction, degrees (meteorological)
 * * `wind_gust` Wind gust. Units – default: metre/sec
 * * `wind_speed` Wind speed. Units – default: metre/sec
 */
export interface WeatherReading {
  dt: number;
  clouds: number;
  dew_point: number;
  feels_like: number | ReadingDailyFeelsLike;
  humidity: number;
  rain?: number;
  snow?: number;
  pop?: number;
  pressure: number;
  sunrise?: number;
  sunset?: number;
  temp: number | ReadingDailyTemperature;
  uvi: number;
  visibility?: number;
  weather: WeatherCondition[];
  wind_deg: number;
  wind_gust?: number;
  wind_speed: number;
}
