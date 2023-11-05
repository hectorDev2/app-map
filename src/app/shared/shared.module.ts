import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SharedLayoutComponent } from './layout/shared-layout/shared-layout.component';

@NgModule({
  declarations: [SidebarComponent, SharedLayoutComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, SharedLayoutComponent],
})
export class SharedModule {}
