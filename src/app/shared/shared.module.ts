import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './pages/error404/error404.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { MaterialIconComponent } from './components/material-icon/material-icon.component';
import { RouterModule } from '@angular/router';
import { UnderConstructionPageComponent } from './pages/under-construction-page/under-construction-page.component';



@NgModule({
  declarations: [
    Error404Component,
    SidebarComponent,
    MaterialIconComponent,
    UnderConstructionPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    Error404Component,
    SidebarComponent,
    UnderConstructionPageComponent
  ]
})
export class SharedModule { }
