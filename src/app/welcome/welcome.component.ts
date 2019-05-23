import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'; 
import { ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  // Member Variables
  username = '';
  isLoggedIn = false;
  biz = null;

  // Activated Router
  constructor(private route: ActivatedRoute,
    private hardCodedAuthentictionService: HardcodedAuthenticationService) {
  }

  // Implementing method
  ngOnInit() : void {
    // snapshot - snapshot of parameters in const
    this.username = this.route.snapshot.params['name'];
    this.isLoggedIn = this.hardCodedAuthentictionService.isUserLoggedIn();
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