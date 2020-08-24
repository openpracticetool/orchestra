import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  UrlSerializer
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {

  user: IUser;

  constructor(private router: Router, private userService: UserService) { }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.userService.isLoggedin);
    if (!this.userService.isLoggedin) {
      return this.router.parseUrl('/login?mid=notautorized');
    }
    return true;
  }
}
