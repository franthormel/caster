import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AirPollution } from '../../../models/air-pollution/air-pollution.models';
import { DataManagerService } from '../../shared/services/data-manager.service';

@Component({
  selector: 'app-air-pollution',
  templateUrl: './air-pollution.component.html',
  styleUrls: ['./air-pollution.component.css'],
})
export class AirPollutionComponent implements OnInit {
  airPollutionData$!: Observable<AirPollution>;

  airPollution!: AirPollution;
  loading = true;

  constructor(private dataManager: DataManagerService) {}

  ngOnInit(): void {
    this.initData();
  }

  private initData() {
    this.airPollutionData$ = this.dataManager.staticFileAirPollution();

    this.airPollutionData$.subscribe({
      next: (data) => {
        this.airPollution = data;
        console.log(data);
      },
      // TODO Use dialogshowservice error show
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
