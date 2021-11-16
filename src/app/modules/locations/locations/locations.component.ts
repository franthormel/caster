import { Component, OnInit } from '@angular/core';

import { WeatherGeolocationDisplay } from '../../../models/geolocation/geolocation-display.models';
import { WeatherGeolocation } from '../../../models/geolocation/geolocation.models';
import { DataManagerService } from '../../shared/services/data-manager.service';
import { DialogHandlerService } from '../../shared/services/dialog-handler.service';
import { StateManagerService } from '../../shared/services/state-manager.service';
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
    private stateManager: StateManagerService,
    private stringManager: StringManagerService
  ) {}

  ngOnInit(): void {
    this.initData();
  }

  clearSearch() {
    this.search = '';
  }

  locationClicked(id: number) {
    const file = id + 1;

    this.stateManager.changeStaticFile(file);
  }

  showLocationIcon(id: number): boolean {
    const file = id + 1;
    const value = this.stateManager.locationsFile === file;

    return value;
  }

  get locations(): WeatherGeolocationDisplay[] {
    let collection: WeatherGeolocationDisplay[] = [];

    this.chosenDataset.forEach((geolocation, index) => {
      const entry = {
        index: index,
        country: geolocation.country,
        name: geolocation.name,
        latitude: geolocation.lat,
        longitude: geolocation.lon,
      };

      collection.push(entry);
    });

    return collection;
  }

  get searchable(): boolean {
    return this.search !== undefined && this.search !== '';
  }

  private initData() {
    const geolocations$ = this.dataManager.fileDataGeolocations();

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

  private get chosenDataset(): WeatherGeolocation[] {
    let dataset = this.geolocations;

    if (this.searchable) {
      dataset = this.filteredLocations;
    }

    return dataset;
  }

  private get filteredLocations(): WeatherGeolocation[] {
    return this.geolocations.filter((geolocation) => {
      const country = this.stringManager.searchContainsText(
        geolocation.country,
        this.search
      );
      const name = this.stringManager.searchContainsText(
        geolocation.name,
        this.search
      );

      const value = country || name;

      return value;
    });
  }
}
