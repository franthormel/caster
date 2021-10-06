import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { weatherKey, weatherReducer } from './weather.reducer';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';
import { WeatherToolbarComponent } from './weather-toolbar/weather-toolbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';

import { WeatherDataService } from './weather-data.service';
import { WeatherAlertComponent } from './weather-alert/weather-alert.component';
import { WeatherHourlyComponent } from './weather-hourly/weather-hourly.component';
import { WeatherDailyComponent } from './weather-daily/weather-daily.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';

@NgModule({
  declarations: [
    WeatherCurrentComponent,
    WeatherToolbarComponent,
    WeatherAlertComponent,
    WeatherHourlyComponent,
    WeatherDailyComponent,
    WeatherMainComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WeatherRoutingModule,
    StoreModule.forFeature(weatherKey, weatherReducer),
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatListModule,
  ],
  providers: [WeatherDataService],
})
export class WeatherModule {}
