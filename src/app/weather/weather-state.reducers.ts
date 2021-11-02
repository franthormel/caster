import {
  WeatherReadingMode,
  WeatherDailyDetailViewMode,
} from '../models/weather/weather.enums';

export interface WeatherState {
  dailyDetailViewMode: WeatherDailyDetailViewMode;
  indexDaily: number;
  indexHourly: number;
  mode: WeatherReadingMode;
}

export const initialWeatherState: WeatherState = {
  dailyDetailViewMode: WeatherDailyDetailViewMode.Temperature,
  indexDaily: 0,
  indexHourly: 0,
  mode: WeatherReadingMode.Current,
};
