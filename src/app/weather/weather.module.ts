import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherCurrentComponent } from './weather-current/weather-current.component';
import { WeatherAlertDialogComponent } from './weather-alert-dialog/weather-alert-dialog.component';
import { WeatherToolbarComponent } from './weather-toolbar/weather-toolbar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { WeatherDataService } from './weather-data.service';

@NgModule({
  declarations: [
    WeatherCurrentComponent,
    WeatherAlertDialogComponent,
    WeatherToolbarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    WeatherRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [WeatherDataService],
})
export class WeatherModule {}
