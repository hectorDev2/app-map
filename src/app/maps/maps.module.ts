import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { MakerPageComponent } from './pages/maker-page/maker-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { LayoutMapComponent } from './layout-map/layout-map.component';
import { SharedModule } from '../shared/shared.module';
import { MinMapComponent } from './components/min-map/min-map.component';

@NgModule({
  declarations: [
    FullScreenPageComponent,
    ZoomRangePageComponent,
    MakerPageComponent,
    PropertiesPageComponent,
    LayoutMapComponent,
    MinMapComponent,
  ],
  imports: [CommonModule, MapsRoutingModule, SharedModule],
  exports: [MinMapComponent],
})
export class MapsModule {}
