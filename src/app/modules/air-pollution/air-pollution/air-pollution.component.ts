import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { AirPollution } from '../../../models/air-pollution/air-pollution.models';
import { AirPollutionComponentDisplay } from '../../../models/air-pollution/air-pollution-display.models';
import { AirPollutionReading } from '../../../models/air-pollution/air-pollution-reading.models';
import { WeatherData } from '../../../models/weather/weather-data.models';
import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';
import { EpochConverterService } from '../../shared/services/epoch-converter.service';
import { StateManagerService } from '../../shared/services/state-manager.service';
import { AirQualityService } from '../air-quality.service';

@Component({
  selector: 'app-air-pollution',
  templateUrl: './air-pollution.component.html',
  styleUrls: ['./air-pollution.component.scss'],
})
export class AirPollutionComponent implements OnInit {
  airPollution!: AirPollution;
  loading = true;
  
  private timezoneOffset = 0;

  constructor(
    private airQuality: AirQualityService,
    private dataManager: DataManagerService,
    private dialogHandler: DialogHandlerService,
    private epochConverter: EpochConverterService,
    private stateManager: StateManagerService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  next() {
    this.stateManager.indexAirPollutionIncrement();
  }

  previous() {
    this.stateManager.indexAirPollutionDecrement();
  }

  get airComponents(): AirPollutionComponentDisplay[] {
    const components = this.reading.components;

    return [
      {
        name: 'Carbon monoxide',
        concentration: components.co,
      },
      {
        name: 'Nitrogen monoxide',
        concentration: components.no,
      },
      {
        name: 'Nitrogen dioxide',
        concentration: components.no2,
      },
      {
        name: 'Ozone',
        concentration: components.o3,
      },
      {
        name: 'Sulphur Dioxide',
        concentration: components.so2,
      },
      {
        name: 'Coarse particulate matter',
        concentration: components.pm2_5,
      },
      {
        name: 'Fine particles matter',
        concentration: components.pm10,
      },
      {
        name: 'Ammonia',
        concentration: components.nh3,
      },
    ];
  }

  get description(): string {
    return this.airQuality.describe(this.reading.main.aqi);
  }

  get time(): string {
    const point = this.airPollution.list[0];
    const compare = this.reading;

    const compareTime = compare.dt;
    const pointTime = point.dt;
    const offset = this.timezoneOffset;

    return this.epochConverter.displayDateTime(pointTime, compareTime, offset);
  }

  private get reading(): AirPollutionReading {
    return this.airPollution.list[this.stateManager.indexAirPollution];
  }

  private collectAllData(): Observable<[AirPollution, WeatherData]> {
    const airPollutionData$ = this.dataManager.fileDataAirPollution();
    const weatherData$ = this.dataManager.fileDataWeather();

    airPollutionData$.subscribe({
      next: (data) => {
        this.airPollution = data;
      },
      error: (error) => {
        this.dialogHandler.showError(error as Error);
      },
    });

    weatherData$.subscribe({
      next: (data) => {
        this.timezoneOffset = data.timezone_offset;
      },
      error: (error) => {
        this.dialogHandler.showError(error as Error);
      },
    });

    return forkJoin([airPollutionData$, weatherData$]);
  }

  private initData() {
    const data$ = this.collectAllData();

    data$.subscribe({
      complete: () => {
        this.loading = false;
      },
    });
  }
}
