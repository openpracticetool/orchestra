import { Component, OnInit } from '@angular/core';
import { Session } from '../../models/session';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public sessions: Session[];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getSessions()
      .subscribe(sessions => this.sessions = sessions);
  }

}
