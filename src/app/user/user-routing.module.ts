import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { DetailUserPageComponent } from './pages/detail-user-page/detail-user-page.component';
import { ListUserPageComponent } from './pages/list-user-page/list-user-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'list',
        component: ListUserPageComponent,
      },
      {
        path: 'detail/:userId',
        component: DetailUserPageComponent,
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
