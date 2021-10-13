import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { environment } from '../environments/environment';

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
        this.assetsIconUrl('sunrise.svg')
      )
    );
    this.iconRegistry.addSvgIcon(
      'sunset',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        this.assetsIconUrl('sunset.svg')
      )
    );

    // Moon
    this.iconRegistry.addSvgIcon(
      'moonrise',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        this.assetsIconUrl('moonrise.svg')
      )
    );
    this.iconRegistry.addSvgIcon(
      'moonset',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        this.assetsIconUrl('moonset.svg')
      )
    );
  }

  assetsIconUrl(path: string): string {
    return `${environment.assetsIcons}${path}`;
  }
}
