import { Injectable } from '@angular/core';
import { AirQualityIndex } from '../../models/air-pollution/air-pollution.enums';

@Injectable({
  providedIn: 'root',
})
export class AirQualityIndexService {
  describe(index: number): string {
    return this.validAqi(index) ? AirQualityIndex[index] : AirQualityIndex[0];
  }

  private validAqi(index: number): boolean {
    return index >= 1 && index <= 5;
  }
}
