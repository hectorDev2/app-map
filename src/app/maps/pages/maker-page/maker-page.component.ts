import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { LngLat, Marker, Map } from 'mapbox-gl';

interface ListMarker {
  marker: Marker;
  color: string;
}
interface ListMarkerPlain {
  lngLat: LngLat;
  color: string;
}

@Component({
  selector: 'app-maker-page',
  templateUrl: './maker-page.component.html',
  styleUrls: ['./maker-page.component.css'],
})
export class MakerPageComponent implements OnDestroy {
  @ViewChild('map')
  public divMap?: ElementRef;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-72.694512, -13.543413);
  public listMarker: ListMarker[] = [];

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'html dont found';
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 17, // starting zoom
    });
    this.readToLocalStorage();
  }

  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;
    const marker = new Marker({
      color: color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);
    this.listMarker.push({ marker, color });
    this.toSaveLocalStorage();
  }

  toFly(marker: Marker) {
    if (!this.map) return;
    const lngLat = marker.getLngLat();

    this.map.flyTo({
      center: lngLat,
      zoom: 18,
    });
  }
  toSaveLocalStorage() {
    const plainMarkers: ListMarkerPlain[] = this.listMarker.map((marker) => {
      return { lngLat: marker.marker.getLngLat(), color: marker.color };
    });
    localStorage.setItem('listMarker', JSON.stringify(plainMarkers));
  }

  readToLocalStorage() {
    const listPlainMarker = localStorage.getItem('listMarker') ?? '[]';
    const plainMarkers: ListMarkerPlain[] = JSON.parse(listPlainMarker);
    plainMarkers.forEach(({ lngLat, color }) => {
      const { lng, lat } = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, color);
    });
  }

  toDeleteMarker(index: number) {
    this.listMarker[index].marker.remove();
    this.listMarker.splice(index, 1);
    this.toSaveLocalStorage();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }
}
