import { Component, OnInit } from '@angular/core';
import { IPractice } from '../../models/practice';
import { ISession } from 'src/app/models/session';
import { SessionService } from 'src/app/services/session.service';
import { PracticeService } from 'src/app/services/practice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {

  submiting = false;
  practices: IPractice[];
  addSessionForm = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ])
  });
  selectedPractice: IPractice = undefined;

  constructor(
    private router: Router,
    private practiceService: PracticeService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.practiceService.getPractices()
      .subscribe(practices => this.practices = practices);
  }

  get isPracticeSelected(): boolean {
    return this.selectedPractice === undefined;
  }

  public setPractice(practice: IPractice): void {
    this.selectedPractice = practice;
  }

  public moreInfo(link): void {
    window.open(`https://openpracticelibrary.com/practice/${link}`, '_blank');
  }

  createSesion(): void {
    this.addSessionForm.disable();
    this.sessionService.createSession({
      ...this.addSessionForm.value,
      pratice: this.selectedPractice
    })
      .subscribe(
        () => {
          this.addSessionForm.enable();
          this.router.navigate(['dashboard']);
        },
        error => {
          this.addSessionForm.enable();
        }
      );
  }
}
