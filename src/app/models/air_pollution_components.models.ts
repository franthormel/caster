/**
 * - **co** Сoncentration of [Carbon monoxide](https://en.wikipedia.org/wiki/Carbon_monoxide),
 * - **no** Сoncentration of [Nitrogen monoxide](https://en.wikipedia.org/wiki/Nitric_oxide),
 * - **no2** Сoncentration of [Nitrogen dioxide](https://en.wikipedia.org/wiki/Nitrogen_dioxide),
 * - **o3** Сoncentration of [Ozone](https://en.wikipedia.org/wiki/Ozone),
 * - **so2** Сoncentration of [Sulphur dioxide](https://en.wikipedia.org/wiki/Sulfur_dioxide),
 * - **pm2_5** Сoncentration of [Fine particles matter](https://en.wikipedia.org/wiki/Particulates),
 * - **pm10** Сoncentration of [Coarse particulate matter](https://en.wikipedia.org/wiki/Particulates#Size,_shape_and_solubility_matter),
 * - **nh3** Сoncentration of [Ammonia](https://en.wikipedia.org/wiki/Ammonia),
 */
export interface AirPollutionComponents {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}
