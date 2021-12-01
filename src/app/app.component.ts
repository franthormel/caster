import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavigationLink } from './models/navigation-link.models';

import { ICONS } from './data/icons/index.data';
import { ICONS_MOON } from './data/icons/moon.data';
import { ICONS_WEATHER } from './data/icons/weather.data';
import { NAVIGATION_LINKS } from './data/navigation-links.data';
import { ThemeManagerService } from './modules/shared/services/theme-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly ICONS = {
    GENERAL: '/assets/images/icons/',
    MOON: '/assets/images/icons/moon/light/',
    WEATHER: '/assets/images/icons/weather/',
  };

  constructor(
    private iconRegistry: MatIconRegistry,
    private router: Router,
    private sanitizer: DomSanitizer,
    private themeManager: ThemeManagerService
  ) {}

  ngOnInit() {
    this.registerAllIcons();
  }

  get navigationLinks(): NavigationLink[] {
    return NAVIGATION_LINKS;
  }

  get title(): string {
    let title = 'CASTER';

    for (const navigation of NAVIGATION_LINKS) {
      if (this.router.url === navigation.link) {
        title = navigation.name;
        break;
      }
    }

    return title;
  }

  get theme(): { [klass: string]: boolean } {
    return this.themeManager.theme;
  }

  private fetchIconAsset(filename: string): string {
    return `${this.ICONS.GENERAL}${filename}.svg`;
  }

  private fetchIconAssetMoon(filename: string): string {
    return `${this.ICONS.MOON}${filename}.svg`;
  }

  private fetchIconAssetWeather(filename: string): string {
    return `${this.ICONS.WEATHER}${filename}.svg`;
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
   *  Name of icons is according to its moonphase in lowerCamelCase notation
   *  while the filename associated with that moonphase is its numerical
   *  cardinal order within the lunar cycle
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
