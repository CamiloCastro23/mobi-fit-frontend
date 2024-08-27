import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobiDashboardRoutingModule } from './mobi-dashboard-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { DietPageComponent } from './pages/diet-page/diet-page.component';
import { WorkoutPageComponent } from './pages/workout-page/workout-page.component';
import { TutorialPageComponent } from './pages/tutorial-page/tutorial-page.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    UserPageComponent,
    DietPageComponent,
    WorkoutPageComponent,
    TutorialPageComponent,
    SupportPageComponent,
    SettingsPageComponent
  ],
  imports: [
    CommonModule,
    MobiDashboardRoutingModule
  ]
})
export class MobiDashboardModule { }
