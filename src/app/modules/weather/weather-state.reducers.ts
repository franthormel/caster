import {
  WeatherReadingMode,
  WeatherDetailMode,
} from '../../models/weather/weather.enums';

export interface WeatherState {
  detailMode: WeatherDetailMode;
  indexDaily: number;
  indexHourly: number;
  readingMode: WeatherReadingMode;
}

export const initialWeatherState: WeatherState = {
  detailMode: WeatherDetailMode.Temperature,
  indexDaily: 0,
  indexHourly: 0,
  readingMode: WeatherReadingMode.Daily,
};
