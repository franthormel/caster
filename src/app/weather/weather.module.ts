import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherRoutingModule } from './weather-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRippleModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';

import { WeatherToolbarComponent } from './weather-toolbar/weather-toolbar.component';
import { WeatherAlertComponent } from './weather-alert/weather-alert.component';
import { WeatherMainComponent } from './weather-main/weather-main.component';
import { WeatherAlertSingleComponent } from './weather-alert-single/weather-alert-single.component';
import { WeatherAlertMultipleComponent } from './weather-alert-multiple/weather-alert-multiple.component';
import { WeatherAlertContentComponent } from './weather-alert-content/weather-alert-content.component';
import { WeatherContentTopComponent } from './weather-content-top/weather-content-top.component';
import { WeatherContentMainComponent } from './weather-content-main/weather-content-main.component';
import { WeatherContentBottomComponent } from './weather-content-bottom/weather-content-bottom.component';

import { WeatherDataService } from './weather-data.service';
import { WeatherModeService } from './weather-mode.service';
import { WeatherStateIndexerService } from './weather-state-indexer.service';
import { MoonPhaseService } from './moon-phase.service';
import { TemperatureConverterService } from './temperature-converter.service';

@NgModule({
  declarations: [
    WeatherToolbarComponent,
    WeatherAlertComponent,
    WeatherMainComponent,
    WeatherAlertSingleComponent,
    WeatherAlertMultipleComponent,
    WeatherAlertContentComponent,
    WeatherContentTopComponent,
    WeatherContentMainComponent,
    WeatherContentBottomComponent,
  ],
  imports: [
    SharedModule,
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
    MatRippleModule,
  ],
  providers: [
    MoonPhaseService,
    TemperatureConverterService,
    WeatherDataService,
    WeatherModeService,
    WeatherStateIndexerService,
  ],
})
export class WeatherModule {}
