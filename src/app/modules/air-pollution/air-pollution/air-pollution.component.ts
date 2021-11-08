import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AirPollution } from '../../../models/air-pollution/air-pollution.models';
import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';

@Component({
  selector: 'app-air-pollution',
  templateUrl: './air-pollution.component.html',
  styleUrls: ['./air-pollution.component.css'],
})
export class AirPollutionComponent implements OnInit {
  airPollutionData$!: Observable<AirPollution>;

  airPollution!: AirPollution;
  loading = true;

  constructor(
    private dataManager: DataManagerService,
    private dialogHandler: DialogHandlerService
  ) {}

  ngOnInit(): void {
    this.initData();
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
