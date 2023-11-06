 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from './pages/forms/forms.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatListModule } from '@angular/material/list';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [ DashboardComponent, ToolbarComponent, SidebarComponent, ],
  imports: [ CommonModule,
            MatSidenavModule,
            MatButtonModule,
            MatIconModule,
            FormsModule,
            MatToolbarModule,
            SharedModule,
            MatListModule,
            DashboardRoutingModule,
            ],

  exports:[ DashboardComponent],
})

export class DashboardModule { 
}
