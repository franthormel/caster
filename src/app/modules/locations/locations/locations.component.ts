import { Component, OnInit } from '@angular/core';

import { WeatherGeolocation } from '../../../models/geolocation/geolocation.models';
import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  geolocations: WeatherGeolocation[][] = [];
  loading = true;

  constructor(
    private dataManager: DataManagerService,
    private dialogHandler: DialogHandlerService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  name(location: WeatherGeolocation[]) {
    return this.firstEntry(location).name;
  }

  country(location: WeatherGeolocation[]) {
    return this.firstEntry(location).country;
  }

  private firstEntry(location: WeatherGeolocation[]): WeatherGeolocation {
    return location[0];
  }

  private initData() {
    const geolocations$ = this.dataManager.staticGeolocationFiles();

    geolocations$.subscribe({
      next: (geolocation$) => {
        geolocation$.subscribe({
          next: (geolocation) => {
            this.geolocations.push(geolocation);
          },
        });
      },
      error: (error) => {
        this.dialogHandler.showError(error as Error);
      },
      complete: () => {
        this.loading = false;
      },
    });
  }
}
