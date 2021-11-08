import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemperatureConverterService {
  convertKelvinToCelsius(kelvin: number): number {
    let value = kelvin - 273.15;

    value = Math.round(value);

    return value;
  }
}
