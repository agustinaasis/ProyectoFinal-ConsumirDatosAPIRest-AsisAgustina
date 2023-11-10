import { Injectable } from '@angular/core';
import { User } from './users/models';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'  
})

export class UsersService {

  constructor() { 

    this.sendNotification$.subscribe({
      next: (message) => alert(message)
    })
  }


  private users: User[] = [
    {
      id: 1,
      name: 'Juan',
      lastName: 'Perez',
      email: 'juan@mail.com',
      password:'',
      token:'',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Marta',
      lastName: 'Rodriguez',
      email: 'marta@mail.com',
      password:'',
      token:'',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Mercedes',
      lastName: 'Suarez',
      email: 'mercedes@mail.com',
      password:'',
      token:'',
      role: 'ADMIN',
    },
  ];



private sendNotification$ = new Subject <string>();

private users$ = new BehaviorSubject <User[]> ([]);


  loadUsers(): void {
    this.users$.next(this.users)
  }


  getUsers(): Subject<User[]>{
      return this.users$
    }

  }

