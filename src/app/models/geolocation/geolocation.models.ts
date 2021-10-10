import { GeolocationName } from "./geolocation_name.models";

export interface Geolocation {
  name: string;
  local_names: GeolocationName,
  lat: number;
  lon: number;
  country: string;
  state? : string;
}