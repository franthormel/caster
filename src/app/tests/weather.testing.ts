import { WeatherAlert } from '../models/weather/weather-alert.models';
import { WeatherData } from '../models/weather/weather-data.models';

export const WEATHER_ALERT_BUTTON_TEXT_SINGLE = 'Alert';
export const WEATHER_ALERT_BUTTON_TEXT_MULTIPLE = 'Alerts';

export const WEATHER_ALERT_BUTTON_TOOLTIP_SINGLE =
  'Alert from weather warning systems';
export const WEATHER_ALERT_BUTTON_TOOLTIP_MULTIPLE =
  'Alerts from weather warning systems';

export const WEATHER_ALERT_TITLE_SINGLE_FIREFOX =
  'Tropical Cyclone Alert from PAGASA-DOST (07/10/2021 5:11:08 pm — 08/10/2021 6:10:58 am)';
export const WEAHTER_ALERT_TITLE_SINGLE_CHROME =
  'Tropical Cyclone Alert from PAGASA-DOST (10/7/2021 5:11:08 PM — 10/8/2021 6:10:58 AM)';

export const WEATHER_ALERT_TITLE_MULTIPLE_OR_EMPTY = 'Weather Alerts';

export const WEATHER_ALERT: WeatherAlert = {
  sender_name: 'PAGASA-DOST',
  event: 'Tropical Cyclone Alert',
  start: 1633597868,
  end: 1633644658,
  description:
    'THE LOW PRESSURE AREA EAST OF CAMARINES NORTE DEVELOPED INTO A TROPICAL DEPRESSION AND WAS NAMED “MARING”.\r\n\r\nLocation of eye/center : At 4:00 PM today, the center of Tropical Depression "MARING" was estimated based on all available data at at 505 km East of Virac, Catanduanes (13.3, 128.9).\r\nStrength : Maximum winds of 45 kph near the centerand gustiness of up to 55 kph.\r\nForecast movement : Forecast to move South Southeastward at 15 kph\r\n\r\nForecast position : \r\n • 24 Hour(Tomorrow afternoon): 570 km East of Virac, Catanduanes(13.6°N,  129.5°E)\r\n • 48 Hour(Saturday afternoon):765 km East of Baler, Aurora( 15.7°N,  128.7°E)\r\n • 72 Hour(Sunday afternoon): 495 km East of Aparri, Cagayan( 18.2°N,  126.3°E)\r\n • 96 Hour(Monday afternoon):Over the coastal waters of Babuyan Islands( 19.5°N,  122.4°E)\r\n • 120 Hour(Tuesday afternoon):465 km West of Basco, Batanes (OUTSIDE PAR)( 20.5°N,  117.5°E)\r\n\r\nHAZARDS AFFECTING LAND AREAS\r\nHeavy Rainfall\r\nToday, the trough of “MARING” may bring light to moderate with at times heavy rains over Eastern Visayas.\r\nUnder these conditions, scattered flooding (including flash floods) and rain-induced landslides are possible especially in areas that are highly or very highly susceptible to these hazard as identified in hazard maps\r\n\r\nSevere Winds\r\nCurrent track and intensity forecast shows that there is a moderate to high likelihood that Tropical Cyclone Wind Signals (TCWS) will be hoisted for several provinces in Northern Luzon. These wind signals may be hoisted for these localities by Saturday morning or afternoon. The highest possible wind signal that may be hoisted for this tropical cyclone is TCWS #2.\r\nHAZARDS AFFECTING COASTAL WATERS\r\nIn the next 24 hours, moderate rough seas will prevail over the seaboards of Luzon and eastern and western seaboards of Visayas and Mindanao. These conditions are risky for those using small seacrafts. Mariners are advised to take precautionary measures when venturing out to sea and, if possible, avoid navigating in these conditions.  \r\nTRACK AND INTENSITY OUTLOOK\r\nTropical Depression “MARING” developed from the Low Pressure Area over the Philippine Sea at 2:00 PM today.\r\nOn the forecast track, the tropical depression will continue moving generally southeastward in the next 12 hours before turning northward tomorrow afternoon. Afterwards, “MARING” will move north northwestward over the Philippine Sea by Saturday morning, then west northwestward by Sunday afternoon as it moves towards Extreme Northern Luzon. By Monday, “MARING” is forecast to pass close or make landfall over Babuyan Islands. \r\n“MARING” is forecast to remain tropical depression while moving over the Philippine Sea and may intensify into tropical storm by Sunday afternoon.\r\n',
  tags: [],
};

export const WEATHER_ALERTS: WeatherAlert[] = [WEATHER_ALERT];

export const WEATHER_DATA: WeatherData = {
  lat: 10.3646,
  lon: 123.9164,
  timezone: 'Asia/Manila',
  timezone_offset: 28800,
  current: {
    dt: 1633614858,
    sunrise: 1633555962,
    sunset: 1633599090,
    temp: 300.11,
    feels_like: 302.99,
    pressure: 1008,
    humidity: 82,
    dew_point: 296.77,
    uvi: 0,
    clouds: 98,
    visibility: 10000,
    wind_speed: 1.1,
    wind_deg: 297,
    wind_gust: 2.03,
    weather: [
      {
        id: 804,
        main: 'Clouds',
        description: 'overcast clouds',
        icon: '04n',
      },
    ],
  },
  minutely: [
    {
      dt: 1633614900,
      precipitation: 0.115,
    },
    {
      dt: 1633614960,
      precipitation: 0.2044,
    },
    {
      dt: 1633615020,
      precipitation: 0.2938,
    },
    {
      dt: 1633615080,
      precipitation: 0.3832,
    },
    {
      dt: 1633615140,
      precipitation: 0.4726,
    },
    {
      dt: 1633615200,
      precipitation: 0.562,
    },
    {
      dt: 1633615260,
      precipitation: 0.4804,
    },
    {
      dt: 1633615320,
      precipitation: 0.3988,
    },
    {
      dt: 1633615380,
      precipitation: 0.3172,
    },
    {
      dt: 1633615440,
      precipitation: 0.2356,
    },
    {
      dt: 1633615500,
      precipitation: 0.154,
    },
    {
      dt: 1633615560,
      precipitation: 0.3896,
    },
    {
      dt: 1633615620,
      precipitation: 0.6252,
    },
    {
      dt: 1633615680,
      precipitation: 0.8608,
    },
    {
      dt: 1633615740,
      precipitation: 1.0964,
    },
    {
      dt: 1633615800,
      precipitation: 1.332,
    },
    {
      dt: 1633615860,
      precipitation: 1.9078,
    },
    {
      dt: 1633615920,
      precipitation: 2.4836,
    },
    {
      dt: 1633615980,
      precipitation: 3.0594,
    },
    {
      dt: 1633616040,
      precipitation: 3.6352,
    },
    {
      dt: 1633616100,
      precipitation: 4.211,
    },
    {
      dt: 1633616160,
      precipitation: 4.6656,
    },
    {
      dt: 1633616220,
      precipitation: 5.1202,
    },
    {
      dt: 1633616280,
      precipitation: 5.5748,
    },
    {
      dt: 1633616340,
      precipitation: 6.0294,
    },
    {
      dt: 1633616400,
      precipitation: 6.484,
    },
    {
      dt: 1633616460,
      precipitation: 6.6848,
    },
    {
      dt: 1633616520,
      precipitation: 6.8856,
    },
    {
      dt: 1633616580,
      precipitation: 7.0864,
    },
    {
      dt: 1633616640,
      precipitation: 7.2872,
    },
    {
      dt: 1633616700,
      precipitation: 7.488,
    },
    {
      dt: 1633616760,
      precipitation: 6.8326,
    },
    {
      dt: 1633616820,
      precipitation: 6.1772,
    },
    {
      dt: 1633616880,
      precipitation: 5.5218,
    },
    {
      dt: 1633616940,
      precipitation: 4.8664,
    },
    {
      dt: 1633617000,
      precipitation: 4.211,
    },
    {
      dt: 1633617060,
      precipitation: 4.211,
    },
    {
      dt: 1633617120,
      precipitation: 4.211,
    },
    {
      dt: 1633617180,
      precipitation: 4.211,
    },
    {
      dt: 1633617240,
      precipitation: 4.211,
    },
    {
      dt: 1633617300,
      precipitation: 4.211,
    },
    {
      dt: 1633617360,
      precipitation: 4.8664,
    },
    {
      dt: 1633617420,
      precipitation: 5.5218,
    },
    {
      dt: 1633617480,
      precipitation: 6.1772,
    },
    {
      dt: 1633617540,
      precipitation: 6.8326,
    },
    {
      dt: 1633617600,
      precipitation: 7.488,
    },
    {
      dt: 1633617660,
      precipitation: 6.622,
    },
    {
      dt: 1633617720,
      precipitation: 5.756,
    },
    {
      dt: 1633617780,
      precipitation: 4.89,
    },
    {
      dt: 1633617840,
      precipitation: 4.024,
    },
    {
      dt: 1633617900,
      precipitation: 3.158,
    },
    {
      dt: 1633617960,
      precipitation: 2.757,
    },
    {
      dt: 1633618020,
      precipitation: 2.356,
    },
    {
      dt: 1633618080,
      precipitation: 1.955,
    },
    {
      dt: 1633618140,
      precipitation: 1.554,
    },
    {
      dt: 1633618200,
      precipitation: 1.153,
    },
    {
      dt: 1633618260,
      precipitation: 1.4692,
    },
    {
      dt: 1633618320,
      precipitation: 1.7854,
    },
    {
      dt: 1633618380,
      precipitation: 2.1016,
    },
    {
      dt: 1633618440,
      precipitation: 2.4178,
    },
    {
      dt: 1633618500,
      precipitation: 2.734,
    },
  ],
  hourly: [
    {
      dt: 1633611600,
      temp: 300.16,
      feels_like: 303.1,
      pressure: 1008,
      humidity: 82,
      dew_point: 296.82,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 1.1,
      wind_deg: 303,
      wind_gust: 2.11,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.54,
    },
    {
      dt: 1633615200,
      temp: 300.11,
      feels_like: 302.99,
      pressure: 1008,
      humidity: 82,
      dew_point: 296.77,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 1.1,
      wind_deg: 297,
      wind_gust: 2.03,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.52,
      rain: {
        '1h': 0.56,
      },
    },
    {
      dt: 1633618800,
      temp: 300.03,
      feels_like: 302.89,
      pressure: 1008,
      humidity: 83,
      dew_point: 296.9,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 1.36,
      wind_deg: 288,
      wind_gust: 1.96,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      pop: 0.64,
      rain: {
        '1h': 2.73,
      },
    },
    {
      dt: 1633622400,
      temp: 299.81,
      feels_like: 299.81,
      pressure: 1008,
      humidity: 84,
      dew_point: 296.88,
      uvi: 0,
      clouds: 98,
      visibility: 10000,
      wind_speed: 1.64,
      wind_deg: 285,
      wind_gust: 1.95,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.64,
      rain: {
        '1h': 0.87,
      },
    },
    {
      dt: 1633626000,
      temp: 299.82,
      feels_like: 302.48,
      pressure: 1007,
      humidity: 84,
      dew_point: 296.89,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.63,
      wind_deg: 270,
      wind_gust: 2.03,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.68,
      rain: {
        '1h': 0.42,
      },
    },
    {
      dt: 1633629600,
      temp: 299.71,
      feels_like: 299.71,
      pressure: 1006,
      humidity: 84,
      dew_point: 296.78,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 1.71,
      wind_deg: 274,
      wind_gust: 2.07,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.68,
      rain: {
        '1h': 0.19,
      },
    },
    {
      dt: 1633633200,
      temp: 299.66,
      feels_like: 299.66,
      pressure: 1007,
      humidity: 84,
      dew_point: 296.4,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.39,
      wind_deg: 274,
      wind_gust: 1.85,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.46,
      rain: {
        '1h': 0.18,
      },
    },
    {
      dt: 1633636800,
      temp: 299.67,
      feels_like: 299.67,
      pressure: 1006,
      humidity: 84,
      dew_point: 296.35,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.89,
      wind_deg: 266,
      wind_gust: 2.37,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.46,
    },
    {
      dt: 1633640400,
      temp: 299.68,
      feels_like: 299.68,
      pressure: 1007,
      humidity: 83,
      dew_point: 296.16,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.91,
      wind_deg: 252,
      wind_gust: 2.46,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.32,
    },
    {
      dt: 1633644000,
      temp: 299.8,
      feels_like: 299.8,
      pressure: 1007,
      humidity: 82,
      dew_point: 296.22,
      uvi: 0,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.29,
      wind_deg: 254,
      wind_gust: 3.05,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.32,
    },
    {
      dt: 1633647600,
      temp: 300.38,
      feels_like: 303.52,
      pressure: 1008,
      humidity: 81,
      dew_point: 296.48,
      uvi: 0.63,
      clouds: 99,
      visibility: 10000,
      wind_speed: 2.32,
      wind_deg: 252,
      wind_gust: 3.19,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.28,
    },
    {
      dt: 1633651200,
      temp: 300.75,
      feels_like: 304.14,
      pressure: 1008,
      humidity: 79,
      dew_point: 296.53,
      uvi: 2.26,
      clouds: 100,
      visibility: 10000,
      wind_speed: 2.12,
      wind_deg: 254,
      wind_gust: 3.12,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.34,
    },
    {
      dt: 1633654800,
      temp: 300.45,
      feels_like: 303.68,
      pressure: 1009,
      humidity: 81,
      dew_point: 296.53,
      uvi: 4.48,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.6,
      wind_deg: 270,
      wind_gust: 2.76,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 0.82,
      rain: {
        '1h': 0.85,
      },
    },
    {
      dt: 1633658400,
      temp: 300.07,
      feels_like: 302.8,
      pressure: 1009,
      humidity: 81,
      dew_point: 296.17,
      uvi: 7.13,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.45,
      wind_deg: 321,
      wind_gust: 1.8,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      pop: 0.92,
      rain: {
        '1h': 1.12,
      },
    },
    {
      dt: 1633662000,
      temp: 300.04,
      feels_like: 302.65,
      pressure: 1008,
      humidity: 80,
      dew_point: 296.05,
      uvi: 9.04,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.44,
      wind_deg: 355,
      wind_gust: 1.41,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 0.92,
      rain: {
        '1h': 0.82,
      },
    },
    {
      dt: 1633665600,
      temp: 299.87,
      feels_like: 302.36,
      pressure: 1008,
      humidity: 81,
      dew_point: 295.97,
      uvi: 2.6,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.82,
      wind_deg: 341,
      wind_gust: 1.44,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 0.92,
      rain: {
        '1h': 0.27,
      },
    },
    {
      dt: 1633669200,
      temp: 299.63,
      feels_like: 299.63,
      pressure: 1008,
      humidity: 81,
      dew_point: 295.75,
      uvi: 2.28,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.9,
      wind_deg: 320,
      wind_gust: 1.39,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 0.99,
      rain: {
        '1h': 0.28,
      },
    },
    {
      dt: 1633672800,
      temp: 299.29,
      feels_like: 299.29,
      pressure: 1008,
      humidity: 81,
      dew_point: 295.55,
      uvi: 1.63,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.72,
      wind_deg: 325,
      wind_gust: 2.14,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.64,
      },
    },
    {
      dt: 1633676400,
      temp: 298.64,
      feels_like: 299.41,
      pressure: 1008,
      humidity: 83,
      dew_point: 295.24,
      uvi: 0.5,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.84,
      wind_deg: 336,
      wind_gust: 2.31,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.36,
      },
    },
    {
      dt: 1633680000,
      temp: 298.19,
      feels_like: 298.97,
      pressure: 1008,
      humidity: 85,
      dew_point: 295.15,
      uvi: 0.19,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.06,
      wind_deg: 326,
      wind_gust: 1.53,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.18,
      },
    },
    {
      dt: 1633683600,
      temp: 297.63,
      feels_like: 298.43,
      pressure: 1009,
      humidity: 88,
      dew_point: 295.14,
      uvi: 0.03,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.05,
      wind_deg: 311,
      wind_gust: 1.53,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.49,
      },
    },
    {
      dt: 1633687200,
      temp: 297.32,
      feels_like: 298.12,
      pressure: 1009,
      humidity: 89,
      dew_point: 295.09,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.09,
      wind_deg: 285,
      wind_gust: 1.54,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.43,
      },
    },
    {
      dt: 1633690800,
      temp: 297.34,
      feels_like: 298.11,
      pressure: 1010,
      humidity: 88,
      dew_point: 294.91,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.91,
      wind_deg: 272,
      wind_gust: 1.4,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.15,
      },
    },
    {
      dt: 1633694400,
      temp: 297.07,
      feels_like: 297.87,
      pressure: 1010,
      humidity: 90,
      dew_point: 294.93,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.31,
      wind_deg: 309,
      wind_gust: 0.65,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 1,
      rain: {
        '1h': 0.41,
      },
    },
    {
      dt: 1633698000,
      temp: 296.89,
      feels_like: 297.7,
      pressure: 1011,
      humidity: 91,
      dew_point: 294.96,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 0.65,
      wind_deg: 231,
      wind_gust: 1.01,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.9,
      rain: {
        '1h': 0.69,
      },
    },
    {
      dt: 1633701600,
      temp: 296.73,
      feels_like: 297.55,
      pressure: 1010,
      humidity: 92,
      dew_point: 294.98,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.26,
      wind_deg: 240,
      wind_gust: 1.54,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.96,
      rain: {
        '1h': 0.95,
      },
    },
    {
      dt: 1633705200,
      temp: 296.52,
      feels_like: 297.34,
      pressure: 1010,
      humidity: 93,
      dew_point: 295.1,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 1.96,
      wind_deg: 202,
      wind_gust: 2.26,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10n',
        },
      ],
      pop: 0.98,
      rain: {
        '1h': 1.73,
      },
    },
    {
      dt: 1633708800,
      temp: 296.77,
      feels_like: 297.59,
      pressure: 1009,
      humidity: 92,
      dew_point: 295.1,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.14,
      wind_deg: 214,
      wind_gust: 3.93,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.98,
      rain: {
        '1h': 0.96,
      },
    },
    {
      dt: 1633712400,
      temp: 296.91,
      feels_like: 297.72,
      pressure: 1008,
      humidity: 91,
      dew_point: 294.96,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.45,
      wind_deg: 223,
      wind_gust: 4.67,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.8,
    },
    {
      dt: 1633716000,
      temp: 297.1,
      feels_like: 297.87,
      pressure: 1008,
      humidity: 89,
      dew_point: 294.85,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.47,
      wind_deg: 226,
      wind_gust: 4.71,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.79,
    },
    {
      dt: 1633719600,
      temp: 297.29,
      feels_like: 298.03,
      pressure: 1008,
      humidity: 87,
      dew_point: 294.76,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.42,
      wind_deg: 230,
      wind_gust: 4.6,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.19,
    },
    {
      dt: 1633723200,
      temp: 297.35,
      feels_like: 298.1,
      pressure: 1007,
      humidity: 87,
      dew_point: 294.82,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.4,
      wind_deg: 230,
      wind_gust: 5.73,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.18,
    },
    {
      dt: 1633726800,
      temp: 297.51,
      feels_like: 298.27,
      pressure: 1008,
      humidity: 87,
      dew_point: 294.9,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.04,
      wind_deg: 222,
      wind_gust: 5.43,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.16,
    },
    {
      dt: 1633730400,
      temp: 297.81,
      feels_like: 298.55,
      pressure: 1008,
      humidity: 85,
      dew_point: 294.86,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.66,
      wind_deg: 227,
      wind_gust: 6,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.17,
    },
    {
      dt: 1633734000,
      temp: 298.04,
      feels_like: 298.8,
      pressure: 1008,
      humidity: 85,
      dew_point: 294.92,
      uvi: 0.08,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.07,
      wind_deg: 242,
      wind_gust: 5.38,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.17,
    },
    {
      dt: 1633737600,
      temp: 298.36,
      feels_like: 299.13,
      pressure: 1009,
      humidity: 84,
      dew_point: 295.15,
      uvi: 0.29,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.07,
      wind_deg: 245,
      wind_gust: 5.78,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.21,
    },
    {
      dt: 1633741200,
      temp: 298.48,
      feels_like: 299.26,
      pressure: 1009,
      humidity: 84,
      dew_point: 295.17,
      uvi: 1.02,
      clouds: 100,
      visibility: 10000,
      wind_speed: 3.83,
      wind_deg: 241,
      wind_gust: 5.81,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.12,
    },
    {
      dt: 1633744800,
      temp: 298.91,
      feels_like: 299.68,
      pressure: 1009,
      humidity: 82,
      dew_point: 295.3,
      uvi: 1.62,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.04,
      wind_deg: 239,
      wind_gust: 5.89,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.2,
    },
    {
      dt: 1633748400,
      temp: 299.14,
      feels_like: 299.14,
      pressure: 1008,
      humidity: 82,
      dew_point: 295.52,
      uvi: 2.05,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.73,
      wind_deg: 245,
      wind_gust: 6.87,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.2,
    },
    {
      dt: 1633752000,
      temp: 299.43,
      feels_like: 299.43,
      pressure: 1007,
      humidity: 81,
      dew_point: 295.51,
      uvi: 2.18,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5,
      wind_deg: 244,
      wind_gust: 7.16,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.22,
    },
    {
      dt: 1633755600,
      temp: 299.61,
      feels_like: 299.61,
      pressure: 1007,
      humidity: 80,
      dew_point: 295.58,
      uvi: 1.91,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.15,
      wind_deg: 244,
      wind_gust: 7.26,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.22,
    },
    {
      dt: 1633759200,
      temp: 299.41,
      feels_like: 299.41,
      pressure: 1006,
      humidity: 80,
      dew_point: 295.31,
      uvi: 1.37,
      clouds: 100,
      visibility: 10000,
      wind_speed: 5.12,
      wind_deg: 248,
      wind_gust: 6.87,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.3,
    },
    {
      dt: 1633762800,
      temp: 299.08,
      feels_like: 299.84,
      pressure: 1006,
      humidity: 81,
      dew_point: 295.24,
      uvi: 0.49,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.87,
      wind_deg: 254,
      wind_gust: 6.76,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.43,
    },
    {
      dt: 1633766400,
      temp: 298.84,
      feels_like: 299.61,
      pressure: 1006,
      humidity: 82,
      dew_point: 295.24,
      uvi: 0.18,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.33,
      wind_deg: 248,
      wind_gust: 5.84,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.5,
    },
    {
      dt: 1633770000,
      temp: 298.54,
      feels_like: 299.3,
      pressure: 1007,
      humidity: 83,
      dew_point: 295.14,
      uvi: 0.03,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.08,
      wind_deg: 250,
      wind_gust: 6.09,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      pop: 0.55,
    },
    {
      dt: 1633773600,
      temp: 298.38,
      feels_like: 299.13,
      pressure: 1007,
      humidity: 83,
      dew_point: 295.06,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.28,
      wind_deg: 241,
      wind_gust: 6.68,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      pop: 0.65,
      rain: {
        '1h': 0.1,
      },
    },
    {
      dt: 1633777200,
      temp: 298.51,
      feels_like: 299.24,
      pressure: 1007,
      humidity: 82,
      dew_point: 294.99,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.79,
      wind_deg: 241,
      wind_gust: 7.1,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.54,
    },
    {
      dt: 1633780800,
      temp: 298.41,
      feels_like: 299.16,
      pressure: 1008,
      humidity: 83,
      dew_point: 295.03,
      uvi: 0,
      clouds: 100,
      visibility: 10000,
      wind_speed: 4.86,
      wind_deg: 245,
      wind_gust: 7.22,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      pop: 0.52,
    },
  ],
  daily: [
    {
      dt: 1633575600,
      sunrise: 1633555962,
      sunset: 1633599090,
      moonrise: 1633557840,
      moonset: 1633601940,
      moon_phase: 0.03,
      temp: {
        day: 302.91,
        min: 298.83,
        max: 303.68,
        night: 300.03,
        eve: 302.3,
        morn: 298.83,
      },
      feels_like: {
        day: 307.61,
        night: 302.89,
        eve: 307.43,
        morn: 299.65,
      },
      pressure: 1007,
      humidity: 70,
      dew_point: 296.69,
      wind_speed: 1.76,
      wind_deg: 229,
      wind_gust: 3.25,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 53,
      pop: 0.64,
      rain: 3.83,
      uvi: 12.75,
    },
    {
      dt: 1633662000,
      sunrise: 1633642361,
      sunset: 1633685455,
      moonrise: 1633647660,
      moonset: 1633691220,
      moon_phase: 0.06,
      temp: {
        day: 300.04,
        min: 296.52,
        max: 300.75,
        night: 296.52,
        eve: 297.63,
        morn: 299.68,
      },
      feels_like: {
        day: 302.65,
        night: 297.34,
        eve: 298.43,
        morn: 299.68,
      },
      pressure: 1008,
      humidity: 80,
      dew_point: 296.05,
      wind_speed: 2.32,
      wind_deg: 252,
      wind_gust: 3.19,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 11.03,
      uvi: 9.04,
    },
    {
      dt: 1633748400,
      sunrise: 1633728761,
      sunset: 1633771822,
      moonrise: 1633737600,
      moonset: 1633780740,
      moon_phase: 0.1,
      temp: {
        day: 299.14,
        min: 296.77,
        max: 299.61,
        night: 298.2,
        eve: 298.54,
        morn: 297.51,
      },
      feels_like: {
        day: 299.14,
        night: 298.98,
        eve: 299.3,
        morn: 298.27,
      },
      pressure: 1008,
      humidity: 82,
      dew_point: 295.52,
      wind_speed: 5.15,
      wind_deg: 244,
      wind_gust: 7.71,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.98,
      rain: 1.06,
      uvi: 2.18,
    },
    {
      dt: 1633834800,
      sunrise: 1633815161,
      sunset: 1633858188,
      moonrise: 1633827720,
      moonset: 1633870440,
      moon_phase: 0.14,
      temp: {
        day: 298.25,
        min: 298.25,
        max: 299.01,
        night: 299.01,
        eve: 299.01,
        morn: 298.9,
      },
      feels_like: {
        day: 299.17,
        night: 299.82,
        eve: 299.84,
        morn: 299.67,
      },
      pressure: 1006,
      humidity: 90,
      dew_point: 296.24,
      wind_speed: 7.94,
      wind_deg: 230,
      wind_gust: 12.31,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.96,
      rain: 3.12,
      uvi: 5.04,
    },
    {
      dt: 1633921200,
      sunrise: 1633901562,
      sunset: 1633944555,
      moonrise: 1633917900,
      moonset: 1633960380,
      moon_phase: 0.18,
      temp: {
        day: 300.17,
        min: 298.66,
        max: 300.17,
        night: 299.21,
        eve: 299.8,
        morn: 299.19,
      },
      feels_like: {
        day: 303.32,
        night: 299.21,
        eve: 299.8,
        morn: 299.19,
      },
      pressure: 1003,
      humidity: 84,
      dew_point: 297.06,
      wind_speed: 8.53,
      wind_deg: 233,
      wind_gust: 13.4,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 17.72,
      uvi: 6.49,
    },
    {
      dt: 1634007600,
      sunrise: 1633987963,
      sunset: 1634030923,
      moonrise: 1634008080,
      moonset: 1634050440,
      moon_phase: 0.21,
      temp: {
        day: 302.32,
        min: 299.18,
        max: 302.32,
        night: 300.01,
        eve: 300.41,
        morn: 299.22,
      },
      feels_like: {
        day: 307.06,
        night: 302.67,
        eve: 303.59,
        morn: 299.22,
      },
      pressure: 1004,
      humidity: 74,
      dew_point: 296.95,
      wind_speed: 10.1,
      wind_deg: 234,
      wind_gust: 15.04,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 0.91,
      rain: 2.61,
      uvi: 7,
    },
    {
      dt: 1634094000,
      sunrise: 1634074364,
      sunset: 1634117292,
      moonrise: 1634098080,
      moonset: 1634140560,
      moon_phase: 0.25,
      temp: {
        day: 302.92,
        min: 299.99,
        max: 302.92,
        night: 300.49,
        eve: 300.69,
        morn: 299.99,
      },
      feels_like: {
        day: 307.63,
        night: 303.11,
        eve: 303.88,
        morn: 302.45,
      },
      pressure: 1006,
      humidity: 70,
      dew_point: 296.61,
      wind_speed: 8.09,
      wind_deg: 241,
      wind_gust: 12.91,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d',
        },
      ],
      clouds: 90,
      pop: 0.82,
      rain: 1.07,
      uvi: 7,
    },
    {
      dt: 1634180400,
      sunrise: 1634160766,
      sunset: 1634203661,
      moonrise: 1634187840,
      moonset: 0,
      moon_phase: 0.29,
      temp: {
        day: 299.63,
        min: 298.15,
        max: 300,
        night: 298.15,
        eve: 298.82,
        morn: 299.12,
      },
      feels_like: {
        day: 299.63,
        night: 299.13,
        eve: 299.77,
        morn: 299.12,
      },
      pressure: 1005,
      humidity: 86,
      dew_point: 296.86,
      wind_speed: 6.23,
      wind_deg: 237,
      wind_gust: 9.97,
      weather: [
        {
          id: 501,
          main: 'Rain',
          description: 'moderate rain',
          icon: '10d',
        },
      ],
      clouds: 100,
      pop: 1,
      rain: 10.62,
      uvi: 7,
    },
  ],
  alerts: WEATHER_ALERTS,
};

export const WEATHER_LOCATION = 'Consolacion, PH';
