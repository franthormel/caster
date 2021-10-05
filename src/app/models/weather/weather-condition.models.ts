/**
 * * `id` [Weather condition id](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)
 * * `main` Group of weather parameters (Rain, Snow, Extreme etc.)
 * * `description` Weather condition within the group ([full list of weather conditions](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)).
 * * `icon` Weather icon id. [How to get icons](https://openweathermap.org/weather-conditions#How-to-get-icon-URL) 
*/
export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}
