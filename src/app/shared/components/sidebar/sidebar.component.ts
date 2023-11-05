import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menuItems = [
    {
      route: '/maps/fullscreen',
      name: 'FullScreen',
    },
    {
      route: '/maps/zoom-range',
      name: 'ZoomRange',
    },
    {
      route: '/maps/markers',
      name: 'Markers',
    },
    {
      route: '/maps/properties',
      name: 'Houses',
    },
  ];
}
