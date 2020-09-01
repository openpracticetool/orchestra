import { Injectable } from '@angular/core';
import { ISession } from '../models/session';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessions = [];

  constructor() { }

  getSessions(): Observable<ISession[]> {
    return of(this.sessions);
  }

  createSession(session: ISession): Observable<boolean> {
    console.log(session);
    return new Observable(subscriber => {
      setTimeout(() => {
        const now = new Date();
        session.date =
          `${now.getDay() > 9 ? '' : 0}${now.getDay()}/${now.getMonth() > 9 ? '' : 0}${now.getMonth() + 1}/${now.getFullYear()}`;
        this.sessions.push(session);
        subscriber.next(true);
        subscriber.complete();
      }, 2000);
    });
  }
}
