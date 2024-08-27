import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';
import { TutorialPageComponent } from './pages/tutorial-page/tutorial-page.component';
import { WorkoutPageComponent } from './pages/workout-page/workout-page.component';
import { DietPageComponent } from './pages/diet-page/diet-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'home',
        component: HomePageComponent
      },
      {
        path: 'users',
        component: UserPageComponent
      },
      {
        path: 'diet',
        component: DietPageComponent
      },
      {
        path: 'workout',
        component: WorkoutPageComponent
      },
      {
        path: 'tutorial',
        component: TutorialPageComponent
      },
      {
        path: 'support',
        component: SupportPageComponent
      },
      {
        path: 'settings',
        component: SettingsPageComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobiDashboardRoutingModule { }
