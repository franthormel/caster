import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WeatherAlert } from 'src/app/models/weather/weather-alert.models';

@Component({
  selector: 'app-weather-alert',
  templateUrl: './weather-alert.component.html',
  styleUrls: ['./weather-alert.component.css'],
})
export class WeatherAlertComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public alerts: WeatherAlert[]) {}
}
