import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherRoutingModule } from './weather-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatNativeDateModule } from '@angular/material/core';

import { WeatherCurrentComponent } from './weather-current/weather-current.component';
import { WeatherToolbarComponent } from './weather-toolbar/weather-toolbar.component';
import { WeatherAlertComponent } from './weather-alert/weather-alert.component';
import { WeatherHourlyComponent } from './weather-hourly/weather-hourly.component';
import { WeatherDailyComponent } from './weather-daily/weather-daily.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { WeatherAlertSingleComponent } from './weather-alert-single/weather-alert-single.component';
import { WeatherAlertMultipleComponent } from './weather-alert-multiple/weather-alert-multiple.component';
import { WeatherAlertContentComponent } from './weather-alert-content/weather-alert-content.component';
import { WeatherContentTopComponent } from './weather-content-top/weather-content-top.component';

import { EpochConverterService } from './epoch-converter.service';
import { WeatherDataService } from './weather-data.service';
import { WeatherModeService } from './weather-mode.service';

@NgModule({
  declarations: [
    WeatherCurrentComponent,
    WeatherToolbarComponent,
    WeatherAlertComponent,
    WeatherHourlyComponent,
    WeatherDailyComponent,
    WeatherMainComponent,
    WeatherAlertSingleComponent,
    WeatherAlertMultipleComponent,
    WeatherAlertContentComponent,
    WeatherContentTopComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WeatherRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatDialogModule,
    MatTooltipModule,
    MatMenuModule,
    MatListModule,
    MatBadgeModule,
    MatChipsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
  providers: [EpochConverterService, WeatherDataService, WeatherModeService],
})
export class WeatherModule {}
