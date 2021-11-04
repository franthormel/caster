import { WeatherReadingDetail } from './weather-reading-detail.models';

export interface WeatherReadingDetailTemperature extends WeatherReadingDetail {
  min: number;
  max: number;
}
