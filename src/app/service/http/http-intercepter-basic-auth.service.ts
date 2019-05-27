import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request : HttpRequest<any>, next: HttpHandler) {
    let username = 'cvela';
    let password = 'dummy';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    // Cloning header and add auth header.
    request = request.clone({
      setHeaders : {
        Authorization : basicAuthHeaderString
      }
    })
    return next.handle(request);
  }
}
