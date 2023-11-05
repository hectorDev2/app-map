import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

(mapboxgl as any).accessToken =
  'pk.eyJ1IjoiaGVjdG9yMjIxMjIyMiIsImEiOiJjbG9qMHgyN3gwNnRsMnFzMm5pcmgyb2d1In0.DrwuomdrcJpuKA7FTOTc1w';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-maps';
}
