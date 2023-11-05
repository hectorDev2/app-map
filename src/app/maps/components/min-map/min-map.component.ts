import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Marker, Map } from 'mapbox-gl';

@Component({
  selector: 'min-map',
  templateUrl: './min-map.component.html',
  styleUrls: ['./min-map.component.css'],
})
export class MinMapComponent implements OnDestroy {
  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;

  ngAfterViewInit() {
    if (!this.divMap?.nativeElement) throw 'Map Div not found';
    if (!this.lngLat) throw "LngLat can't be null";

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat,
      zoom: 15,
      interactive: false,
    });

    new Marker().setLngLat(this.lngLat).addTo(this.map);
  }

  ngOnDestroy(): void {
    if (this.map) this.map.remove();
  }
}
