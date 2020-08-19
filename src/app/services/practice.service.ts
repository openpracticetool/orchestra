import { Injectable } from '@angular/core';
import { Practice } from '../models/practice';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeService {

  practices: Practice[];

  constructor() {
    this.practices = [
      { name: 'Lean Coffee', description: 'Democratically generated agendas for more valuable conversations', link: 'lean-coffee/' }
    ];
  }

  getPractices(): Observable<Practice[]> {
    return of(this.practices);
  }
}
