import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appStateReducer } from './app-state.reducers';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { EpochConverterService } from './epoch-converter.service';
import { StringParserService } from './string-parser.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ appState: appStateReducer }),
    StoreDevtoolsModule.instrument({}),
  ],
  bootstrap: [AppComponent],
  providers: [EpochConverterService, StringParserService],
})
export class AppModule {}
