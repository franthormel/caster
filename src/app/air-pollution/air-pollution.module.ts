import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirPollutionRoutingModule } from './air-pollution-routing.module';
import { AirPollutionComponent } from './air-pollution/air-pollution.component';
import { AirQualityIndexService } from './air-quality-index.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AirPollutionComponent],
  imports: [CommonModule, AirPollutionRoutingModule, SharedModule],
  providers: [AirQualityIndexService],
})
export class AirPollutionModule {}
