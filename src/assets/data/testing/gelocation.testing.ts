import { WeatherGeolocation } from '../../../app/models/geolocation/geolocation.models';

export const TEST_GEOLOCATION: WeatherGeolocation = {
  name: 'Consolacion',
  local_names: {
    ascii: 'Consolacion',
    feature_name: 'Consolacion',
  },
  lat: 10.3667,
  lon: 123.95,
  country: 'PH',
};

export const TEST_GEOLOCATIONS: WeatherGeolocation[] = [TEST_GEOLOCATION];
