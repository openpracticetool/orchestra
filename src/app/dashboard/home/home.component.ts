import { Component, OnInit } from '@angular/core';
import { ISession } from '../../models/session';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sessions: ISession[];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getSessions()
      .subscribe(sessions => this.sessions = sessions);
  }

}
