import { Component, OnInit } from '@angular/core';

import { WeatherGeolocationDisplay } from '../../../models/geolocation/geolocation-display.models';
import { WeatherGeolocation } from '../../../models/geolocation/geolocation.models';
import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';
import { StringManagerService } from '../../shared/services/string-manager.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  geolocations: WeatherGeolocation[] = [];
  loading = true;
  search = '';

  constructor(
    private dataManager: DataManagerService,
    private dialogHandler: DialogHandlerService,
    private stringManager: StringManagerService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  clearSearch() {
    this.search = '';
  }

  get locations(): WeatherGeolocationDisplay[] {
    let collection: WeatherGeolocationDisplay[] = [];

    this.chooseDataset.forEach((geolocation, index) => {
      const entry = this.createGeolocationDisplay(geolocation, index);

      collection.push(entry);
    });

    return collection;
  }

  get searchable(): boolean {
    return this.search !== undefined && this.search !== '';
  }

  private createGeolocationDisplay(
    geolocation: WeatherGeolocation,
    index: number
  ): WeatherGeolocationDisplay {
    return {
      index: index,
      country: geolocation.country,
      name: geolocation.name,
      latitude: geolocation.lat,
      longitude: geolocation.lon,
    };
  }

  private initData() {
    const geolocations$ = this.dataManager.staticGeolocationFiles();

    geolocations$.subscribe({
      next: (geolocation$) => {
        geolocation$.subscribe({
          next: (geolocation) => {
            this.geolocations.push(geolocation[0]);
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

  private geolocationContains(geolocation: WeatherGeolocation): boolean {
    const countryContains = this.stringManager.searchContainsText(
      geolocation.country,
      this.search
    );
    const nameContains = this.stringManager.searchContainsText(
      geolocation.name,
      this.search
    );

    const value = countryContains || nameContains;

    return value;
  }

  private get chooseDataset(): WeatherGeolocation[] {
    let dataset = this.geolocations;

    if (this.searchable) {
      dataset = this.filteredLocations;
    }

    return dataset;
  }

  private get filteredLocations(): WeatherGeolocation[] {
    let results: WeatherGeolocation[] = [];

    this.geolocations.forEach((geolocation) => {
      if (this.geolocationContains(geolocation)) {
        results.push(geolocation);
      }
    });

    return results;
  }
}
