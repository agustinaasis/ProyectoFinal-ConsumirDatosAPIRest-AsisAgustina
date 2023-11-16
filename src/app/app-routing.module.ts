import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { CoursesComponent } from './dashboard/pages/courses/courses.component';
import { UserDetailComponent } from './dashboard/pages/users/components/user-detail/user-detail.component';
import { dashboardGuard } from './core/guards/dashboard.guard';



const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [dashboardGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then((m) => m.AuthModule),
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
    children: [
      {
        path: 'users/detail/:id',
        component: UserDetailComponent,
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login',
  }

]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
