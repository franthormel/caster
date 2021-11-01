import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appStateReducer } from './app-state.reducers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EpochConverterService } from './shared/epoch-converter.service';
import { StringParserService } from './shared/string-parser.service';
import { MoonPhaseService } from './weather/moon-phase.service';
import { TemperatureConverterService } from './weather/temperature-converter.service';
import { WeatherDataService } from './weather/weather-data.service';
import { WeatherModeService } from './weather/weather-mode.service';
import { WeatherStateIndexerService } from './weather/weather-state-indexer.service';
import { ErrorDialogComponent } from './shared/error-dialog/error-dialog.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [AppComponent, ErrorDialogComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: appStateReducer }),
    StoreDevtoolsModule.instrument({}),
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    EpochConverterService,
    StringParserService,
    MoonPhaseService,
    TemperatureConverterService,
    WeatherDataService,
    WeatherModeService,
    WeatherStateIndexerService,
  ],
})
export class AppModule {}
