import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { environment } from '../environments/environment';
import { MOON_ICONS } from './data/moon-phase/icons.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.registerSvgIcons();
  }

  // Place custom SVG icons here
  registerSvgIcons() {
    // Sun
    this.iconRegistry.addSvgIcon(
      'sunrise',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        this.assetsIconUrl('sunrise')
      )
    );
    this.iconRegistry.addSvgIcon(
      'sunset',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        this.assetsIconUrl('sunset')
      )
    );

    // Moon
    this.iconRegistry.addSvgIcon(
      'moonrise',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        this.assetsIconUrl('moonrise')
      )
    );
    this.iconRegistry.addSvgIcon(
      'moonset',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        this.assetsIconUrl('moonset')
      )
    );
    // Moonphases
    for (const i in MOON_ICONS) {
      this.iconRegistry.addSvgIcon(
        MOON_ICONS[i],
        this.sanitizer.bypassSecurityTrustResourceUrl(
          this.assetsMoonIconUrl(i)
        )
      )
    }
  }

  assetsIconUrl(filename: string): string {
    return `${environment.assetsIcons}${filename}.svg`;
  }

  assetsMoonIconUrl(filename: string): string {
    return `${environment.assetsIcons}moon/light/${filename}.svg`;
  }
}
