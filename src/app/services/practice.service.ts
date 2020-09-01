import { Injectable } from '@angular/core';
import { IPractice } from '../models/practice';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  practices: IPractice[];

  constructor() {
    this.practices = [
      { name: 'Lean Coffee', description: 'Democratically generated agendas for more valuable conversations', link: 'lean-coffee/' }
    ];
  }

  getPractices(): Observable<IPractice[]> {
    return of(this.practices);
  }
}
