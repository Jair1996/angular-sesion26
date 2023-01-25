import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomePageComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
