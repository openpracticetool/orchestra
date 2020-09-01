import { Injectable } from '@angular/core';
import { IUser, User, IJwt } from '../models/user';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser;

  constructor(private http: HttpClient) {
    this.currentUser = User.parse(localStorage.getItem('user'));
  }

  public doLogout(): void {
    localStorage.clear();
    this.currentUser = null;
  }

  getUser(): Observable<IUser> {
    return of(this.currentUser);
  }

  public set setUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentUser = user;
  }

  public get isLoggedin(): boolean {
    return this.currentUser ? true : false;
  }

  public doLogin(user: any): Observable<any> {
    const payload = new HttpParams()
      .set('username', user.email)
      .set('password', user.password)
      .set('client_id', 'orchestra')
      .set('client_secret', 'f6c891c5-130a-4dc9-b926-8132be9fa6a8')
      .set('grant_type', 'password')
      .set('scope', 'openid');
    return this.http.post<IJwt>(
      '/auth/realms/open-practice-tool/protocol/openid-connect/token',
      payload,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded')
      }
    ).pipe(
      tap((jwt: IJwt) => {
        user.jwt = jwt;
        this.setUser = (user as IUser);
      })
    );
  }
}
