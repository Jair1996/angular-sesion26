import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ListUserPageComponent } from './pages/list-user-page/list-user-page.component';
import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    ListUserPageComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
