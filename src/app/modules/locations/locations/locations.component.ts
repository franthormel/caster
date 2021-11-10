import { Component, OnInit } from '@angular/core';

import { WeatherGeolocationDisplay } from '../../../models/geolocation/geolocation-display.models';
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
  searchText = '';

  constructor(
    private dataManager: DataManagerService,
    private dialogHandler: DialogHandlerService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  clearSearchText() {
    this.searchText = '';
  }

  get searchTextIsAvailable(): boolean {
    return this.searchText !== '';
  }


  private get filteredLocations(): WeatherGeolocation[][] {
    let results: WeatherGeolocation[][] = [];

    return results;
  }

  get locations(): WeatherGeolocationDisplay[] {
    let collection: WeatherGeolocationDisplay[] = [];

    this.geolocations.forEach((geolocation, index) => {
      const entry = this.createDisplay(geolocation, index);

      collection.push(entry);
    });

    return collection;
  }

  get count(): number {
    return this.geolocations.length;
  }

  private createDisplay(
    geolocation: WeatherGeolocation[],
    index: number
  ): WeatherGeolocationDisplay {
    const location = geolocation[0];

    return {
      index: index,
      country: location.country,
      name: location.name,
      latitude: location.lat,
      longitude: location.lon,
    };
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
