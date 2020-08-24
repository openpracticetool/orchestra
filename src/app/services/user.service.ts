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

  public static doLogout(): void {
    localStorage.removeItem('user');
  }

  public doLogin(): boolean {
    // TODO: Integrate with SSO to do Login
    return this.user.email === 'test@test.com' && this.user.password === '123456';
  }

  public get getUser(): Observable<IUser> {
    return of(this.user);
  }

  public set setUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  public get isLoggedin(): boolean {
    return this.user ? true : false;
  }
}
