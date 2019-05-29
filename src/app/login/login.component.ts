import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { JwtAuthenticationService } from '../service/jwt-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'cvela';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Router (Dependency of the LoginComponent)
  // Dependency Injection: If I need it, it should be given to me.
  // If it is passed as a constructor, it will be used as a Member Variable.
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService,
    private jwtAuthenticationService: JwtAuthenticationService) {
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

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeAuthenticationService(
      this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]); 
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
    }

  handleJWTAuthLogin() {
    this.jwtAuthenticationService.executeJWTAuthenticationService(
      this.username, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        }
      )
    }
}