import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css'],
})
export class ZoomRangePageComponent implements OnDestroy {
  ngOnDestroy(): void {
    this.map?.remove();
  }
  @ViewChild('map')
  public divMap?: ElementRef;
  public map?: Map;
  public zoom = 16;
  public currentLngLat: LngLat = new LngLat(-72.694512, -13.543413);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'html dont found';
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }

  mapListeners() {
    if (!this.map) throw 'map dont found';
    this.map.on('zoom', (e) => {
      this.zoom = this.map!.getZoom();
    });
    this.map.on('zoomend', (e) => {
      if (this.map!.getZoom() > 18) {
        this.map?.setZoom(18);
      }
    });
    this.map.on('move', (e) => {
      this.currentLngLat = this.map!.getCenter();
    });
  }
  zoomIn() {
    this.map?.zoomIn();
  }
  zoomOut() {
    this.map?.zoomOut();
  }
  zoomChanged(value: string) {
    this.zoom = Number(value);
    this.map?.setZoom(this.zoom);
  }
}
