import { Component, OnInit } from '@angular/core';
import { Practice } from '../../models/practice';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';
import { PracticeService } from 'src/app/services/practice.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {

  public practices: Practice[];
  public session: Session;

  constructor(private sessionService: SessionService, private practiceService: PracticeService) {
    this.session = {
      name: '',
      pratice: undefined,
      date: ''
    };
  }

  ngOnInit(): void {
    this.practiceService.getPractices()
      .subscribe(practices => this.practices = practices);
  }

  get isPracticeSelected(): boolean {
    return this.session.pratice === undefined;
  }

  public setPractice(practiceName: Practice): void {
    this.session.pratice = practiceName;
  }

  public moreInfo(link): void {
    window.open(`https://openpracticelibrary.com/practice/${link}`, '_blank');
  }
}
