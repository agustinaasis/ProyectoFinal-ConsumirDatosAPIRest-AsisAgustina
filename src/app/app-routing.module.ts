import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { CoursesModule } from './dashboard/pages/courses/courses.module';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
