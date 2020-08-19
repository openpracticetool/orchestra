import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: IUser = new User();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public doLogin(): void {
    this.router.navigate(['dashboard']);
  }
}
