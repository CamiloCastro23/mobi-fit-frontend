import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './pages/error404/error404.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { MaterialIconComponent } from './components/material-icon/material-icon.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Error404Component,
    SidebarComponent,
    MaterialIconComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    Error404Component,
    SidebarComponent
  ]
})
export class SharedModule { }
