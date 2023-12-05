import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from '../users.service';
import { Observable, filter, map, of, tap } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

  userName = ' ' ;

  users$: Observable <User[]> ;

constructor(private matDialog : MatDialog, private usersService: UsersService) {
  this.users$ = this.usersService.getUsers();

  }


addUser(): void {
  this.matDialog
    .open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => {
        if (!!v) {
            this.users$ = this.usersService.createUser(v);
            }
          },
        });
      }

onEditUser(user: User): void {
  this.matDialog
  .open(UsersDialogComponent, {
    data: user,
  })
  .afterClosed()
  .subscribe({
    next: (v) => {
      if (!!v) {
        this.users$ = this.usersService.updateUser(user.id, v);
        }
      },
    })
}

onDeleteUser(userId: number): void {
  if (confirm('¿Estás seguro de eliminar este Usuario?')) {
    this.users$ = this.usersService.deleteUser(userId);
  }
}
}



