import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from './pages/forms/forms.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [ DashboardComponent],
  imports: [ CommonModule,
            MatSidenavModule,
            MatButtonModule,
            MatIconModule,
            FormsModule,
            MatToolbarModule,
            UsersModule,
            SharedModule,
            ],


  exports:[ DashboardComponent,],

})
export class DashboardModule { }
