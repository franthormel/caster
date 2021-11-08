import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WeatherMainComponent } from './weather-main/weather-main.component';

const routes: Routes = [
  { path: '', component: WeatherMainComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherRoutingModule {}
