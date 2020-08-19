import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

export interface Item {
  name: string;
  isDivider?: boolean;
  isButton?: boolean;
  link?: string;
  action?(): any;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public isOpen = false;

  @Input()
  public items: Item[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public doAction(item: Item): void {
    if (item.isButton) {
      item.action();
    } else {
      this.router.navigate([item.link]);
    }
  }

}
