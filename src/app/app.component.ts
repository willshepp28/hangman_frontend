import { Component } from '@angular/core';
import { AuthService } from './core/authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) {}

  isAuthenticated(){
    return this.authService.isLoggedIn();
  }

  logOut() {
    this.authService.logout();
  }
}
