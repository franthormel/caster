import { Component, Input } from '@angular/core';

import { ThemeManagerService } from '../services/theme-manager.service';

@Component({
  selector: 'shared-anchor-link',
  templateUrl: './anchor-link.component.html',
  styleUrls: ['./anchor-link.component.css'],
})
export class AnchorLinkComponent {
  @Input() href!: string;
  @Input() text!: string;

  constructor(private themeManager: ThemeManagerService) {}

  get anchorLink(): { [klass: string]: boolean } {
    return this.themeManager.anchorLink;
  }
}
