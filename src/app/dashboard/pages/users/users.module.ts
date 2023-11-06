import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users.component';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component'
import { UsersRoutingModule } from './users-routing.module';
import { UserDetailComponent } from './components/user-detail/user-detail.component';



@NgModule({
  declarations: [UsersComponent, UsersDialogComponent, UsersTableComponent, UserDetailComponent, ],
  imports: [CommonModule, SharedModule, UsersRoutingModule, ],
  exports: [UsersComponent],

})
export class UsersModule {}
