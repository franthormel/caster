/**
 * * `sender_name` Name of the alert source. Please read here the [full list of alert sources](https://openweathermap.org/api/one-call-api#listsource)
 * * `event` Alert event name
 * * `start` Date and time of the start of the alert, Unix, UTC (seconds)
 * * `end` Date and time of the end of the alert, Unix, UTC (seconds)
 * * `description` Description of the alert
 * * `tags` Type of severe weather
 */
export interface WeatherAlert {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
}
