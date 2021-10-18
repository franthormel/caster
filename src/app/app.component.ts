import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { environment } from '../environments/environment';
import { ICONS } from './data/icons/icons.data';
import { ICONS_MOON } from './data/icons/icons-moon.data';

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

  registerSvgIcons() {
    // Icons use regular names as filenames, while ...
    for (const icon of ICONS) {
      this.iconRegistry.addSvgIcon(
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(this.assetsIconUrl(icon))
      );
    }

    // ... moon icons use numbers as file names
    for (const i in ICONS_MOON) {
      this.iconRegistry.addSvgIcon(
        ICONS_MOON[i],
        this.sanitizer.bypassSecurityTrustResourceUrl(this.assetsMoonIconUrl(i))
      );
    }
  }

  private assetsIconUrl(filename: string): string {
    return `${environment.assetsIcons}${filename}.svg`;
  }

  private assetsMoonIconUrl(filename: string): string {
    return `${environment.assetsIconsMoon}${filename}.svg`;
  }
}
