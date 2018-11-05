import { Component } from '@angular/core';
import { AuthService } from './core/authentication/auth.service';
import { DecodeTokenService } from './core/helpers/decodeToken/decode-token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token;
  userId;

  constructor(
    private decodeToken: DecodeTokenService,
    private authService: AuthService
  ) { }

  getId() {
    this.token = this.decodeToken.getDecodedAccessToken(localStorage.getItem('token'));
    this.userId = this.token.user[0].id;
    return this.userId;
  }

  isAuthenticated() {
    return this.authService.isLoggedIn();
  }


}
