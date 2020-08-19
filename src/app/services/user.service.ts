import { Injectable } from '@angular/core';
import { IUser, User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUser;

  constructor() {
    this.user = User.parse(localStorage.getItem('user'));
  }

  doLogin(): boolean {
    return this.user.email === 'tes@test.com' && this.user.password === '123';
  }

  getUser(): Observable<IUser> {
    return of(this.user);
  }

  setUser(user: IUser): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }
}
