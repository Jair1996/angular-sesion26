import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserPageComponent } from './pages/list-user-page/list-user-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DetailUserPageComponent } from './pages/detail-user-page/detail-user-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListUserPageComponent,
    LayoutComponent,
    DetailUserPageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
