import { Injectable } from '@angular/core';
import { AirQualityIndex } from '../../models/air-pollution/air-pollution.enums';

@Injectable({
  providedIn: 'root',
})
export class AirQualityService {
  describe(index: number): string {
    return AirQualityIndex[index];
  }
}
