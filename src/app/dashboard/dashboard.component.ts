import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';
import { Observable } from 'rxjs';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public user: IUser;
  public isSidebaseOpen = false;
  public pages: Page[] = [
    { link: '/dashboard', name: 'Home', icon: 'home' }
  ];
  public userItems = [
    {
      name: 'Log out',
      isButton: true,
      action: () => {
        this.userService.doLogout();
        this.router.navigate(['/home']);
      }
    }
  ];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser()
      .subscribe(user => this.user = user);
  }
}
