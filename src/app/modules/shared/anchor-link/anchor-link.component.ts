import { Component, Input } from '@angular/core';

import { KlassManagerService } from '../services/klass-manager.service';

@Component({
  selector: 'shared-anchor-link',
  templateUrl: './anchor-link.component.html',
  styleUrls: ['./anchor-link.component.css'],
})
export class AnchorLinkComponent {
  @Input() href!: string;
  @Input() text!: string;

  constructor(private klassManager: KlassManagerService) {}

  get anchorLink(): { [klass: string]: boolean } {
    return this.klassManager.anchorLink;
  }
}
