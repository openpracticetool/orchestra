import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitting = false;
  errorMessage: string;
  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('[a-zA-Z0-9\-]+')
    ])
  });

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

  public doLogin(user: IUser): void {
    this.submitting = true;
    this.loginForm.disable();
    this.errorMessage = null;
    this.userService.setUser = user;
    if (this.userService.doLogin()) {
      this.router.navigate(['dashboard']);
    } else {
      this.submitting = false;
      this.loginForm.enable();
      this.errorMessage = 'Invalid user/password.';
    }
  }
}
