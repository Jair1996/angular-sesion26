import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAuthorizationGuard } from './core/guards/auth-authorization.guard';
import { DashboarAuthorizationGuard } from './core/guards/dashboar-authorization.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [DashboarAuthorizationGuard],
    canMatch: [DashboarAuthorizationGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    canActivate: [AuthAuthorizationGuard],
    canMatch: [AuthAuthorizationGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
