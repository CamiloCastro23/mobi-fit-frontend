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
import { SharedModule } from '../shared/shared.module';
import { StatsCardComponent } from './components/stats-card/stats-card.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { ClientCardComponent } from './components/client-card/client-card.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    HomePageComponent,
    UserPageComponent,
    DietPageComponent,
    WorkoutPageComponent,
    TutorialPageComponent,
    SupportPageComponent,
    SettingsPageComponent,
    StatsCardComponent,
    WelcomeCardComponent,
    ModuleCardComponent,
    InfoCardComponent,
    ClientCardComponent
  ],
  imports: [
    CommonModule,
    MobiDashboardRoutingModule,
    SharedModule
  ],
  exports: [
    LayoutPageComponent
  ]
})
export class MobiDashboardModule { }
