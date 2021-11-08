import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AirPollution } from '../../../models/air-pollution/air-pollution.models';
import { AirPollutionReading } from '../../../models/air-pollution/air-pollution-reading.models';
import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';
import { EpochConverterService } from '../../shared/services/epoch-converter.service';
import { StateManagerService } from '../../shared/services/state-manager.service';
import { AirQualityService } from '../air-quality.service';

interface AirComponentDisplay {
  name: string;
  concentration: number;
}

@Component({
  selector: 'app-air-pollution',
  templateUrl: './air-pollution.component.html',
  styleUrls: ['./air-pollution.component.scss'],
})
export class AirPollutionComponent implements OnInit {
  airPollutionData$!: Observable<AirPollution>;

  airPollution!: AirPollution;
  loading = true;

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

  get airComponents(): AirComponentDisplay[] {
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
    return this.epochConverter.convertToDateTime(this.reading.dt);
  }

  private get reading(): AirPollutionReading {
    return this.airPollution.list[this.stateManager.indexAirPollution];
  }

  private initData() {
    this.airPollutionData$ = this.dataManager.staticFileAirPollution();

    this.airPollutionData$.subscribe({
      next: (data) => {
        this.airPollution = data;
      },
      error: (e) => {
        this.dialogHandler.showError(e as Error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
