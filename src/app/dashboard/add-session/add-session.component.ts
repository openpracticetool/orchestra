import { Component, OnInit } from '@angular/core';
import { Practice } from '../../models/practice';
import { Session } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';
import { PracticeService } from 'src/app/services/practice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {

  practices: Practice[];
  addSessionForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });
  selectedPractice: Practice = undefined;

  constructor(
    private practiceService: PracticeService
  ) { }

  ngOnInit(): void {
    this.practiceService.getPractices()
      .subscribe(practices => this.practices = practices);
  }

  get isPracticeSelected(): boolean {
    return this.selectedPractice === undefined;
  }

  public setPractice(practice: Practice): void {
    this.selectedPractice = practice;
  }

  public moreInfo(link): void {
    window.open(`https://openpracticelibrary.com/practice/${link}`, '_blank');
  }
}
