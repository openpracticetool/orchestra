import { Injectable } from '@angular/core';
import { IUser, User } from '../models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: IUser;

  constructor(private http: HttpClient) {
    this.user = User.parse(localStorage.getItem('user'));
  }

  public static doLogout(): void {
    localStorage.removeItem('user');
  }

  public doLogin(): Observable<any> {
    const payload = new HttpParams()
      .set('username', this.user.email)
      .set('password', this.user.password)
      .set('client_id', 'orchestra')
      .set('client_secret', 'f6c891c5-130a-4dc9-b926-8132be9fa6a8')
      .set('grant_type', 'password')
      .set('scope', 'openid');

    return this.http.post(
      'https://sso-opt-dev.apps.s45.core.rht-labs.com/auth/realms/open-practice-tool/protocol/openid-connect/token',
      payload,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    );
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
