import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/pages/error404/error404.component';
import { authCognitoActivateGuard } from './mobi-dashboard/guards/auth-cognito-activate.guard';
import { authCognitoMatchGuard } from './mobi-dashboard/guards/auth-cognito-match.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./mobi-dashboard/mobi-dashboard.module').then(m => m.MobiDashboardModule),
    canActivate: [ authCognitoActivateGuard ],
    canMatch: [ authCognitoMatchGuard ]
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
