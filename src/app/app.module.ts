import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appStateReducer } from './app-state.reducers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EpochConverterService } from './weather/epoch-converter.service';
import { WeatherDataService } from './weather/weather-data.service';
import { WeatherModeService } from './weather/weather-mode.service';
import { MoonPhaseService } from './weather/moon-phase.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: appStateReducer }),
    StoreDevtoolsModule.instrument({}),
  ],
  bootstrap: [AppComponent],
  providers: [
    EpochConverterService,
    MoonPhaseService,
    WeatherDataService,
    WeatherModeService,
  ],
})
export class AppModule {}
