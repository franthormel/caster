import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '../shared/shared.module';
import { WeatherRoutingModule } from './weather-routing.module';

import { WeatherAlertComponent } from './weather-alert/weather-alert.component';
import { WeatherAlertContentComponent } from './weather-alert-content/weather-alert-content.component';
import { WeatherAlertMultipleComponent } from './weather-alert-multiple/weather-alert-multiple.component';
import { WeatherAlertSingleComponent } from './weather-alert-single/weather-alert-single.component';
import { WeatherContentBottomComponent } from './weather-content-bottom/weather-content-bottom.component';
import { WeatherContentMainComponent } from './weather-content-main/weather-content-main.component';
import { WeatherContentTopComponent } from './weather-content-top/weather-content-top.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';

import { MoonPhaseService } from './moon-phase.service';
import { TemperatureConverterService } from './temperature-converter.service';

@NgModule({
  declarations: [
    WeatherAlertComponent,
    WeatherAlertContentComponent,
    WeatherAlertMultipleComponent,
    WeatherAlertSingleComponent,
    WeatherContentBottomComponent,
    WeatherContentMainComponent,
    WeatherContentTopComponent,
    WeatherMainComponent,
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatBadgeModule,
    MatChipsModule,
    MatExpansionModule,
  ],
  providers: [MoonPhaseService, TemperatureConverterService],
})
export class WeatherModule {}
