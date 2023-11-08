import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

private _authUser$ = new BehaviorSubject <User | null > (null);

public authUser$ = this._authUser$.asObservable();
  
    constructor () { }

    login() : Observable<User> {
        
        const user: User = {
            id: 5,
            name: 'test',
            lastName: 'Asis',
            email: 'test@mail.com',
        };

        this._authUser$.next(user);

        return of <User>(user)

}
}
