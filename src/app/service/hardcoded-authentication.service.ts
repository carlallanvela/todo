import { Injectable } from '@angular/core';

// @Injecteble: Makes this component available for Dependency Injection.
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if (username === 'cvela' && password === 'dummy') {
      // Saves a key-value pair in Application Session.
      // Values set in Local Storage persist across browser restarts. 
      // It is less secure.
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    // Remove user from session.
    sessionStorage.removeItem('authenticatedUser');
  }
}
