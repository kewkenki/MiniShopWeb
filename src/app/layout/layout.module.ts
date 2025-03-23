import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterOutlet } from '@angular/router';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
],
  imports: [
    BrowserModule,
    SharedModule,
    RouterOutlet,
    LayoutRoutingModule,
],
  exports: [LayoutComponent],
  providers: [],
})
export class LayoutModule {}
