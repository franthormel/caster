import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemperatureConverterService {
  convertKelvinToCelsius(kelvin: number): number {
    return Math.round(kelvin - 273.15);
  }
}
