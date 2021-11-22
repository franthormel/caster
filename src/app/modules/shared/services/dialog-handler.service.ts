import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { WeatherAlertComponent } from '../../weather/weather-alert/weather-alert.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';
import { WeatherAlert } from '../../../models/weather/weather-alert.models';

@Injectable({
  providedIn: 'root',
})
export class DialogHandlerService {
  constructor(private dialog: MatDialog) {}

  showWeatherAlert(
    alerts: WeatherAlert[] | undefined,
    disableClose?: boolean
  ) {
    this.dialog.open(WeatherAlertComponent, {
      data: alerts,
      disableClose: disableClose,
    });
  }

  showError(error: Error, disableClose?: boolean) {
    this.dialog.open(ErrorDialogComponent, {
      data: error,
      disableClose: disableClose,
    });
  }
}
