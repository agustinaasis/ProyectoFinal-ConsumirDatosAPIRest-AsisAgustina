import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  userName = ' ' ;

users: User [] = [
  {
    id: 1,
    name: 'Juan',
    lastName: 'Perez',
    email: 'juan@mail.com',
  },
  {
    id: 2,
    name: 'Marta',
    lastName: 'Rodriguez',
    email: 'marta@mail.com',
  },
  {
    id: 3,
    name: 'Mercedes',
    lastName: 'Suarez',
    email: 'mercedes@mail.com',
  }
]

constructor(private matDialog : MatDialog ){}
openUsersDialog(): void {
  this.matDialog.open(UsersDialogComponent)
  .afterClosed()
  .subscribe({
    next:(v) => {
      console.log('VALOR: ', v);
      if (!!v){

        this.users = [
          ...this.users,
          {
            ... v,
            id: new Date().getTime(),
          }
        ]
      }
    }
  })
}

onEditUser (user: User): void {
  this.matDialog.open(UsersDialogComponent, { data : user, }).afterClosed().subscribe({
    next: (v) => {
      if (!!v){
        const arrayNuevo = [ ...this.users];
        const indexToEdit = arrayNuevo.findIndex((u) => u.id === user.id);
        arrayNuevo[indexToEdit] = { ...arrayNuevo[indexToEdit], ...v};
        this.users = [ ...arrayNuevo ];
      }
    }
  });

}

onDeleteUser (userId: number) : void {
  if (confirm('¿Está seguro de eliminar este usuario?')) {
    this.users = this.users.filter((u) => u.id !== userId );
  }
}
}


