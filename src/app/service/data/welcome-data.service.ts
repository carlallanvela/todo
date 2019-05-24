import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {};
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient
  ) { }

  executeHelloWorldBeanService() {
    // We are expecting HelloWorldBean response.
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
  }
}
