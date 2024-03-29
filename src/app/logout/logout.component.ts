import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private hardCodedAuthenticationService : 
    HardcodedAuthenticationService
  ) {}

  ngOnInit() {
    // Remove User from Session.
    this.hardCodedAuthenticationService.logout();
  }
}
