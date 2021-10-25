import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemperatureConverterService {
  convertKelvinToCelsius(kelvin: number, round: boolean = true): number {
    let value = kelvin - 273.15;

    if (round) {
      value = Math.round(value);
    }

    return value;
  }
}
