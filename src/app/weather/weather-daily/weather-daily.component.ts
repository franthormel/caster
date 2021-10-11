import { Component, Input } from '@angular/core';
import { WeatherReadingDaily } from 'src/app/models/weather/weather-reading-daily.models';

@Component({
  selector: 'app-weather-daily',
  templateUrl: './weather-daily.component.html',
  styleUrls: ['./weather-daily.component.css'],
})
export class WeatherDailyComponent {
  @Input() weatherDay!: WeatherReadingDaily[];
}
