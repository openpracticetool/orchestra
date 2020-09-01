import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '../services/app-config.service';
import { UserService } from '../services/user.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    if (request.url.startsWith('/auth/realms/')) {
      const newRequest = request.clone({
        url: `${AppConfigService.settings.ssoUrl}${request.url}`
      });
      return next.handle(newRequest);
    }
    if (request.url.startsWith('/api/')) {
      const newRequest = request.clone({
        url: `${AppConfigService.settings.apiUrl}${request.url}`,
        headers: request.headers.set(
          'Authotization',
          AppConfigService.settings.openUrls.includes(request.url) ?
            '' : `Bearer ${this.userService.currentUser.jwt.access_token}`
        )
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
