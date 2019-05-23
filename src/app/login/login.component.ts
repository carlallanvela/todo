import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
/** LoginComponent Class */
export class LoginComponent implements OnInit {

  username = 'cvela';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router (Dependency of the LoginComponent)
  // Dependency Injection: If I need it, it should be given to me.
  // If it is passed as a constructor, it will be used as a Member Variable.
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService) {
  }

  ngOnInit() {}

  handleLogin() {
    if (this.hardcodedAuthenticationService.
      authenticate(this.username, this.password)) {
      // Redirect to Welcome Page
      // Pass Username as a parameter.
      this.router.navigate(['welcome', this.username]); 
      this.invalidLogin = false;
    } else {
      console.log(this.username + ' has invalid credentials');
      this.invalidLogin = true;
    }
  }
}
