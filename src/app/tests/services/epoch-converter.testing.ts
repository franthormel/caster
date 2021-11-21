import { WeatherAlert } from '../../models/weather/weather-alert.models';

export const EPOCH_ALERT: WeatherAlert = {
  sender_name: '',
  event: '',
  description: '',
  tags: [],
  start: 0,
  end: 1604641827,
};

export const EPOCH_ALERT_TIMERANGE_FIREFOX =
  '01/01/1970 8:00:00 am — 06/11/2020 1:50:27 pm';
export const EPOCH_ALERT_TIMERANGE_CHROME =
  '1/1/1970 8:00:00 AM — 11/6/2020 1:50:27 PM';

export const EPOCH_INPUTS: number[] = [
  1604641827, 1573019427, 1541483427, 1509947427, 1478411427,
];

export const EPOCH_OUTPUTS_DATE: number[] = [
  1604641827000, 1573019427000, 1541483427000, 1509947427000, 1478411427000,
];

export const EPOCH_OUTPUTS_TIME_FIREFOX = '1:50:27 pm';
export const EPOCH_OUTPUTS_TIME_CHROME = '1:50:27 PM';

export const EPOCH_OUTPUTS_DATE_TIME_FIREFOX: string[] = [
  '06/11/2020 1:50:27 pm',
  '06/11/2019 1:50:27 pm',
  '06/11/2018 1:50:27 pm',
  '06/11/2017 1:50:27 pm',
  '06/11/2016 1:50:27 pm',
];
export const EPOCH_OUTPUTS_DATE_TIME_CHROME: string[] = [
  '11/6/2020 1:50:27 PM',
  '11/6/2019 1:50:27 PM',
  '11/6/2018 1:50:27 PM',
  '11/6/2017 1:50:27 PM',
  '11/6/2016 1:50:27 PM',
];

export const EPOCH_POINT = 1637387407;

export const EPOCH_COMPARE: number[] = [
  1637203849, 1637290249, 1637376649, 1637401849, 1637369449, 1637473787,
  1637560187, 1637646587,
];

export const EPOCH_DISPLAY_DATE_TIME: string[] = [
  '11/18/2021 10:50:49 AM',
  '11/19/2021 10:50:49 AM',
  'Today 10:50:49 AM',
  'Today 5:50:49 PM',
  'Today 8:50:49 AM',
  'Tomorrow 1:49:47 PM',
  '11/22/2021 1:49:47 PM',
  '11/23/2021 1:49:47 PM',
];
