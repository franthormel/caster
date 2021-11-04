import {
  WeatherReadingMode,
  WeatherDetailMode,
} from '../models/weather/weather.enums';

export interface WeatherState {
  dailyDetailViewMode: WeatherDetailMode;
  indexDaily: number;
  indexHourly: number;
  mode: WeatherReadingMode;
}

export const initialWeatherState: WeatherState = {
  dailyDetailViewMode: WeatherDetailMode.Temperature,
  indexDaily: 0,
  indexHourly: 0,
  mode: WeatherReadingMode.Daily,
};
