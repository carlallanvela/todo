import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.username === 'cvela' && this.password === 'dummy') {
      console.log(this.username + 'has valid credentials');
      // Redirect to Welcome Page
      this.router.navigate(['welcome', this.username]); //Pass Username as a parameter.
      this.invalidLogin = false;
    } else {
      console.log(this.username + ' has invalid credentials');
      this.invalidLogin = true;
    }
  }
}
