import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; 
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  // Member Variables
  username = '';
  isLoggedIn = false;
  welcomeMessageFromService:string;
  biz = null;

  // Activated Router
  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) {
  }

  // Implementing method
  ngOnInit() : void {
    // snapshot - snapshot of parameters in const
    this.username = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    // Async call. i.e. execute request and do not wait for 
    // response. We are not keeping the thread hanging.
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMessageFromService = response.message;
  }
}

/** Public Class */
export class Foo {
  // Field
  biz: string;
  message: string;

  // Constructor
  constructor(biz: string, appComponent: AppComponent) {
    this.biz = biz;
    this.message = appComponent.message; 
  } 

  // Function
  getBiz() : string {
    return this.biz;
  }
}

/** Private Class */
class Biz {
  fooBiz: string;
  bizBaz: string;
  appComponent: AppComponent;

  bizFunction() {
    // New Class Instance
    var foo = new Foo('Biz', this.appComponent);
    this.fooBiz = foo.biz; // Access Class Field
    this.bizBaz = foo.getBiz(); // Access Class Function
    this.appComponent.message;
  }
}