import { Component, OnInit } from '@angular/core';

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

  public isSidebaseOpen = true;
  public linkText = false;
  public pages: Page[] = [
    { link: '/dashboard', name: 'Home', icon: 'home' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
