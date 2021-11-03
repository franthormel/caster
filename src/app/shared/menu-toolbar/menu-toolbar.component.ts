import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss'],
})
export class MenuToolbarComponent {
  @Input() title!: string;
}
