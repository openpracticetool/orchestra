import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

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

  public isSidebaseOpen = false;
  public pages: Page[] = [
    { link: '/dashboard', name: 'Home', icon: 'home' }
  ];
  public userItems = [
    {
      name: 'Log out',
      isButton: true,
      action: () => {
        UserService.doLogout();
        this.router.navigate(['/home']);
      }
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void { }
}
