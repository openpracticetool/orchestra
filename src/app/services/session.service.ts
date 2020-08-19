import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessions = [];

  constructor() { }

  getSessions(): Observable<Session[]> {
    return of(this.sessions);
  }
}
