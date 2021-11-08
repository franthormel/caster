import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AirPollutionRoutingModule } from './air-pollution-routing.module';
import { AirPollutionComponent } from './air-pollution/air-pollution.component';
import { AirQualityService } from './air-quality.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AirPollutionComponent],
  imports: [
    CommonModule,
    AirPollutionRoutingModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [AirQualityService],
})
export class AirPollutionModule {}
