import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherCurrentComponent } from './weather-current/weather-current.component';

const routes: Routes = [
  { path: 'current', component: WeatherCurrentComponent },
  { path: '**', redirectTo: 'current', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
