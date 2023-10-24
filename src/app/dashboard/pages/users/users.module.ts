import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersComponent } from './users.component';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component'
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [UsersComponent, UsersDialogComponent, UsersTableComponent ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [UsersComponent, ]

})
export class UsersModule {}
