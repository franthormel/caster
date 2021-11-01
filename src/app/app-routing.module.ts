import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'weather',
    loadChildren: () =>
      import('./weather/weather.module').then((m) => m.WeatherModule),
  },
  {
    path: 'air-pollution',
    loadChildren: () =>
      import('./air-pollution/air-pollution.module').then(
        (m) => m.AirPollutionModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./locations/locations.module').then((m) => m.LocationsModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsModule),
  },
  { path: '**', redirectTo: 'weather', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
