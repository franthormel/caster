import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/models/weather/weather.models';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Returns previously collected weather data
   * @param index Name of file (1 to 9)
   * @returns Observable<Object>
   */
  localFileWeatherData(index: number = 1): Observable<Weather> {
    return this.httpClient.get<Weather>(`assets/data/weather/${index}.json`, {
      responseType: 'json',
    });
  }
}
