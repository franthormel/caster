import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { environment } from '../environments/environment';

import { ICONS } from './data/icons/icons.data';
import { ICONS_MOON } from './data/icons/icons-moon.data';
import { ICONS_WEATHER } from './data/icons/icons-weather.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.registerAllIcons();
  }

  private fetchIconAsset(filename: string): string {
    return `${environment.assetsIcons}${filename}.svg`;
  }

  private fetchIconAssetMoon(filename: string): string {
    return `${environment.assetsIconsMoon}${filename}.svg`;
  }

  private fetchIconAssetWeather(filename: string): string {
    return `${environment.assetsIconsWeather}${filename}.svg`;
  }

  private registerAllIcons() {
    this.registerGeneralIcons();
    this.registerMoonIcons();
    this.registerWeatherIcons();
  }

  private registerGeneralIcons() {
    for (const icon of ICONS) {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(this.fetchIconAsset(icon))
      );
    }
  }

  /**
   *  Name of icons is according to its moonphase in lowerCamelCase notation while
   *  the filename associated with that moonphase is its cardinal order within the lunar cycle
   */
  private registerMoonIcons() {
    for (const i in ICONS_MOON) {
      this.iconRegistry.addSvgIcon(
        ICONS_MOON[i],
        this.sanitizer.bypassSecurityTrustResourceUrl(
          this.fetchIconAssetMoon(i)
        )
      );
    }
  }

  private registerWeatherIcons() {
    for (const icon of ICONS_WEATHER) {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(
          this.fetchIconAssetWeather(icon)
        )
      );
    }
  }
}
