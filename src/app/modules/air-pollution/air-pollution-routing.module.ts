import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AirPollutionComponent } from './air-pollution/air-pollution.component';

const routes: Routes = [
  { path: '', component: AirPollutionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirPollutionRoutingModule {}
